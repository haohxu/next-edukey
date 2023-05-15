import ChakraNextLink from "@/components/chakra-next-link";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Kbd,
  Tag,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Fragment, useEffect, useRef, useState, useCallback } from "react";

export default function FourOhFourPage() {
  return (
    <Fragment>
      <Head>
        <title>404 - Page Not Found - EduKey</title>
      </Head>
      <Container maxWidth={"6xl"}>
        <Flex paddingTop={"40px"} width={"inherit"} direction={"column"}>
          <Heading paddingBottom={"40px"}>
            404 - Page Not Found -{" "}
            <ChakraNextLink href={"/"} textColor={"blue.500"}>
              Click to Home Page
            </ChakraNextLink>{" "}
          </Heading>

          <Center paddingBottom={"20px"}>
            <Heading fontSize={"lg"} textAlign={"center"}>
              Hi
            </Heading>
          </Center>
          <Center paddingBottom={"20px"}>
            <Heading fontSize={"lg"} textAlign={"center"}>
              It seems you have mistakenly entered the void space, but we
              prepare this Easter Egg to you!
            </Heading>
          </Center>
          <Center paddingBottom={"20px"}>
            <Heading fontSize={"lg"} textAlign={"center"}>
              You can play this{" "}
              <Heading
                as={"span"}
                color={"blue.500"}
                fontSize={"2xl"}
                fontWeight={"bold"}
              >
                {" brain-training "}
              </Heading>{" "}
              2048 game. Have Fun!
            </Heading>
          </Center>
          <Center paddingBottom={"40px"}>
            <Heading fontSize={"lg"} textAlign={"center"}>
              <Tag>LEFT</Tag> : <Kbd>←</Kbd>, <Kbd>A</Kbd>, <Kbd>H</Kbd>
              {" | "}
              <Tag>DOWN</Tag> : <Kbd>↓</Kbd>, <Kbd>S</Kbd>, <Kbd>J</Kbd> {" | "}
              <Tag>UP</Tag> : <Kbd>↑</Kbd>, <Kbd>W</Kbd>, <Kbd>K</Kbd>
              {" | "}
              <Tag>RIGHT</Tag> : <Kbd>→</Kbd>, <Kbd>D</Kbd>, <Kbd>L</Kbd>
            </Heading>
          </Center>
          <Center>
            <Game />
          </Center>
        </Flex>
      </Container>
    </Fragment>
  );
}

type BoardType = number[][];

const getInitialBoard = (): BoardType => {
  const board: BoardType = [];

  for (let i = 0; i < 4; i++) {
    board[i] = [];

    for (let j = 0; j < 4; j++) {
      board[i][j] = 0;
    }
  }

  return board;
};

const generateTile = (board: BoardType) => {
  const newBoard = [...board];
  let addedTile = false;

  while (!addedTile) {
    const row = Math.floor(Math.random() * 4);
    const col = Math.floor(Math.random() * 4);

    if (newBoard[row][col] === 0) {
      newBoard[row][col] = Math.random() < 0.5 ? 2 : 4;
      addedTile = true;
    }
  }

  return newBoard;
};

const getScore = (board: number[][]): number => {
  return board.flat().reduce((acc, val) => acc + val, 0);
};

const Score = ({ value }: { value: number }) => {
  return (
    <Box>
      <Text fontSize="2xl">Score:</Text>
      <Text fontSize="2xl">{value}</Text>
    </Box>
  );
};

interface TileProps {
  value: number;
}

const Tile = ({ value }: TileProps) => {
  const colors: { [key: string]: string } = {
    "0": "#EEF1FF",
    "2": "#eee4da",
    "4": "#ede0c8",
    "8": "#f2b179",
    "16": "#f59563",
    "32": "#f67c5f",
    "64": "#f65e3b",
    "128": "#edcf72",
    "256": "#edcc61",
    "512": "#edc850",
    "1024": "#edc53f",
    "2048": "#edc22e",
    // "super": "#3c3a32",
  };

  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.1 }}
    >
      <Box
        w={{ base: "50px", sm: "60px", md: "80px" }}
        h={{ base: "50px", sm: "60px", md: "80px" }}
        backgroundColor={value > 2048 ? "#3c3a32" : colors[value.toString()]}
        borderRadius={{ md: "4px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        fontSize={{ base: "sm", md: "2xl" }}
        color={value <= 4 ? "gray.700" : "white"}
      >
        {value === 0 ? " " : value}
      </Box>
    </motion.div>
  );
};

// export default Tile;

const Board = ({ board }: { board: BoardType }) => {
  return (
    <Box w="fit-content" m="auto" mt="6">
      {board.map((row, i) => (
        <Box key={i} display="flex">
          {row.map((value, j) => (
            <Box key={i * 4 + j} m={{ base: 1, md: 2 }}>
              <Tile value={value} />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

const Game = () => {
  const [board, setBoard] = useState<BoardType>(getInitialBoard());

  const generateTileOnceWhenMount = useCallback(() => {
    console.log(`Mount 2048`);
    setBoard((board) => generateTile(board));
  }, []);

  useEffect(() => {
    generateTileOnceWhenMount();
  }, [generateTileOnceWhenMount]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newBoard = [...board];
      let moved = false;

      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "k":
          for (let col = 0; col < 4; col++) {
            for (let row = 1; row < 4; row++) {
              if (newBoard[row][col] !== 0) {
                let mergeIndex = row - 1;

                while (mergeIndex >= 0 && newBoard[mergeIndex][col] === 0) {
                  mergeIndex--;
                }

                if (
                  mergeIndex >= 0 &&
                  newBoard[mergeIndex][col] === newBoard[row][col]
                ) {
                  newBoard[mergeIndex][col] *= 2;
                  newBoard[row][col] = 0;
                  moved = true;
                } else if (mergeIndex < 0) {
                  newBoard[0][col] = newBoard[row][col];
                  newBoard[row][col] = 0;
                  moved = true;
                } else if (mergeIndex + 1 !== row) {
                  newBoard[mergeIndex + 1][col] = newBoard[row][col];
                  newBoard[row][col] = 0;
                  moved = true;
                }
              }
            }
          }
          break;
        case "ArrowDown":
        case "s":
        case "j":
          for (let col = 0; col < 4; col++) {
            for (let row = 2; row >= 0; row--) {
              if (newBoard[row][col] !== 0) {
                let mergeIndex = row + 1;

                while (mergeIndex <= 3 && newBoard[mergeIndex][col] === 0) {
                  mergeIndex++;
                }

                if (
                  mergeIndex <= 3 &&
                  newBoard[mergeIndex][col] === newBoard[row][col]
                ) {
                  newBoard[mergeIndex][col] *= 2;
                  newBoard[row][col] = 0;
                  moved = true;
                } else if (mergeIndex > 3) {
                  newBoard[3][col] = newBoard[row][col];
                  newBoard[row][col] = 0;
                  moved = true;
                } else if (mergeIndex - 1 !== row) {
                  newBoard[mergeIndex - 1][col] = newBoard[row][col];
                  newBoard[row][col] = 0;
                  moved = true;
                }
              }
            }
          }
          break;
        case "ArrowLeft":
        case "a":
        case "h":
          for (let row = 0; row < 4; row++) {
            for (let col = 1; col < 4; col++) {
              if (newBoard[row][col] !== 0) {
                let mergeIndex = col - 1;

                while (mergeIndex >= 0 && newBoard[row][mergeIndex] === 0) {
                  mergeIndex--;
                }

                if (
                  mergeIndex >= 0 &&
                  newBoard[row][mergeIndex] === newBoard[row][col]
                ) {
                  newBoard[row][mergeIndex] *= 2;
                  newBoard[row][col] = 0;
                  moved = true;
                } else if (mergeIndex < 0) {
                  newBoard[row][0] = newBoard[row][col];
                  newBoard[row][col] = 0;
                  moved = true;
                } else if (mergeIndex + 1 !== col) {
                  newBoard[row][mergeIndex + 1] = newBoard[row][col];
                  newBoard[row][col] = 0;
                  moved = true;
                }
              }
            }
          }
          break;
        case "ArrowRight":
        case "d":
        case "l":
          for (let row = 0; row < 4; row++) {
            for (let col = 2; col >= 0; col--) {
              if (newBoard[row][col] !== 0) {
                let mergeIndex = col + 1;

                while (mergeIndex <= 3 && newBoard[row][mergeIndex] === 0) {
                  mergeIndex++;
                }

                if (
                  mergeIndex <= 3 &&
                  newBoard[row][mergeIndex] === newBoard[row][col]
                ) {
                  newBoard[row][mergeIndex] *= 2;
                  newBoard[row][col] = 0;
                  moved = true;
                } else if (mergeIndex > 3) {
                  newBoard[row][3] = newBoard[row][col];
                  newBoard[row][col] = 0;
                  moved = true;
                } else if (mergeIndex - 1 !== col) {
                  newBoard[row][mergeIndex - 1] = newBoard[row][col];
                  newBoard[row][col] = 0;
                  moved = true;
                }
              }
            }
          }
          break;
        default:
          break;
      }

      if (moved) {
        setBoard(generateTile(newBoard));
      }
    };

    console.log(board);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [board]);

  const score = getScore(board);

  return (
    <Box
      backgroundColor={"#F9F9F9"}
      textColor="black"
      w="fit-content"
      p="6"
      boxShadow={"lg"}
    >
      <Heading as="h1" size="xl" mb="6">
        2048 Game
      </Heading>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Score value={score} />
        <Button
          colorScheme="blue"
          onClick={() => {
            // setBoard([
            //   [2, 4, 8, 16],
            //   [32, 64, 128, 256],
            //   [512, 1024, 2048, 4096],
            //   [8192, 0, 0, 0],
            // ]);
            setBoard(generateTile(generateTile(getInitialBoard())));
          }}
        >
          New Game
        </Button>
      </Box>
      <Board board={board} />
    </Box>
  );
};
