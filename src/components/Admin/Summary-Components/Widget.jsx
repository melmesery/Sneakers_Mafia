import React from "react";
import { Icon, Percentage, StyledWidget, Text } from "../StyledAdmin.js";

const Widget = ({ data }) => {
  return (
    <StyledWidget>
      <Icon color={data.color} bgcolor={data.bgcolor}>
        {data.icon}
      </Icon>
      <Text>
        <h3>
          {data.isMoney
            ? "$" + data.digits?.toLocaleString()
            : data.digits?.toLocaleString()}
        </h3>
        <p>{data.title}</p>
      </Text>
      {data.percentage < 0 ? (
        <Percentage ispositive="false">
          {Math.floor(data.percentage)}%
        </Percentage>
      ) : (
        <Percentage ispositive="true">
          {Math.floor(data.percentage)}%
        </Percentage>
      )}
    </StyledWidget>
  );
};

export default Widget;
