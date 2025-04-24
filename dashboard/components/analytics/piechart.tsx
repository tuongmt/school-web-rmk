"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Biểu đồ tròn thể hiện số lượng đăng ký";

const registrationData = [
  { status: "Đồng ý", value: 1020, fill: "var(--color-accepted)" },
  { status: "Từ chối", value: 280, fill: "var(--color-rejected)" },
];

const chartConfig = {
  accepted: {
    label: "Đồng ý",
    color: "hsl(var(--chart-1))",
  },
  rejected: {
    label: "Từ chối",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Analytics_PieChart() {
  const id = "pie-interactive";

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Biểu đồ Tròn - Số Lượng Đăng Ký</CardTitle>
          <CardDescription>Số liệu đăng ký xét tuyển </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={registrationData}
              dataKey="value"
              nameKey="status"
              innerRadius={85}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          Tổng
                          {registrationData
                            .reduce((a, b) => a + b.value, 0)
                            .toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Lượt đăng ký
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="flex justify-center space-x-4 pt-4">
        <div className="flex items-center space-x-2">
          <span
            className="block h-4 w-4"
            style={{ backgroundColor: "var(--color-accepted)" }}
          ></span>
          <span>Đồng ý</span>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className="block h-4 w-4"
            style={{ backgroundColor: "var(--color-rejected)" }}
          ></span>
          <span>Từ chối</span>
        </div>
      </div>
    </Card>
  );
}
