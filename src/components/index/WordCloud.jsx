import {
  Center,
  Container,
  Select,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";
import AnyChart from "anychart-react";
import { Fragment, useState } from "react";

export default function WordCloud() {
  const [selectedChart, setSelectedChart] = useState(1);

  return (
    <Fragment>
      <Flex direction={"row"}>
        <Heading alignSelf={"center"} paddingX={2} fontSize={"lg"}>
          Select a Qualification Level:{" "}
        </Heading>
        <Select
          maxWidth={"300px"}
          onChange={(e) => {
            setSelectedChart(Number(e.target.value));
          }}
        >
          <option value={1}>{getTitle(1)}</option>
          <option value={2}>{getTitle(2)}</option>
          <option value={3}>{getTitle(3)}</option>
          <option value={4}>{getTitle(4)}</option>
          <option value={5}>{getTitle(5)}</option>
        </Select>
        <Spacer />
      </Flex>
      <Center overflow={"auto"}>
        <AnyChart
          width={800}
          height={400}
          type="tagCloud"
          data={getData(selectedChart)}
          title={getTitle(selectedChart)}
          angles={[0, 45, 90]}
        />
      </Center>
    </Fragment>
  );
}

const getTitle = (value) => {
  const titleList = {
    1: "All qualification",
    2: "Year 10 or below",
    3: "Highschool level",
    4: "Certificate III/IV or Diploma",
    5: "Bachelor degree and Above",
  };

  return titleList[value];
};

const getData = (value) => {
  const data1 = [
    {
      FIELD1: 0,
      x: "Chief Executives and Managing Directors",
      category: "Post  Grad/ Grad Dip or Grad Cert",
      value: 22.8,
    },
    {
      FIELD1: 1,
      x: "General Managers",
      category: "Post  Grad/ Grad Dip or Grad Cert",
      value: 21.7,
    },
    {
      FIELD1: 2,
      x: "Legislators",
      category: "Post  Grad/ Grad Dip or Grad Cert",
      value: 22.5,
    },
    {
      FIELD1: 3,
      x: "Aquaculture Farmers",
      category: "Post  Grad/ Grad Dip or Grad Cert",
      value: 3.3,
    },
  ];

  const data2 = [
    {
      FIELD1: 3244,
      x: "Blacksmiths",
      category: "Advanced Diploma/Diploma",
      value: 7.3,
    },
    {
      FIELD1: 3245,
      x: "Electroplaters",
      category: "Advanced Diploma/Diploma",
      value: 6.5,
    },
    {
      FIELD1: 3246,
      x: "Farriers",
      category: "Advanced Diploma/Diploma",
      value: 7.7,
    },
  ];

  const data3 = [
    {
      FIELD1: 4438,
      x: "Other Medical Technicians",
      category: "Certificate III/IV",
      value: 17.4,
    },
    {
      FIELD1: 4439,
      x: "Fisheries Officers",
      category: "Certificate III/IV",
      value: 16.2,
    },
    {
      FIELD1: 4440,
      x: "Meat Inspectors",
      category: "Certificate III/IV",
      value: 64.6,
    },
  ];

  const data4 = [
    {
      FIELD1: 5031,
      x: "Veterinarians",
      category: "Year 12",
      value: 1.1,
    },
    {
      FIELD1: 5032,
      x: "Other Natural and Physical Science Professionals",
      category: "Year 12",
      value: 2.6,
    },
    {
      FIELD1: 5033,
      x: "Early Childhood (Pre-primary School) Teachers",
      category: "Year 12",
      value: 2.9,
    },
  ];

  const data5 = [
    {
      FIELD1: 7679,
      x: "Purchasing and Supply Logistics Clerks",
      category: "Year 10 and below",
      value: 14.8,
    },
    {
      FIELD1: 7680,
      x: "Transport and Despatch Clerks",
      category: "Year 10 and below",
      value: 16.7,
    },
    {
      FIELD1: 7681,
      x: "Conveyancers and Legal Executives",
      category: "Year 10 and below",
      value: 7.1,
    },
  ];

  const dataList = {
    1: data1,
    2: data2,
    3: data3,
    4: data4,
    5: data5,
  };

  return dataList[value];
};
