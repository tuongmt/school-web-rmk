"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Biểu đồ cột";

const chartData = [
  { category: "Bài viết", count: 320 },
  { category: "Tài liệu quản lý", count: 150 },
  { category: "Thông báo sinh viên", count: 210 },
  { category: "Yêu cầu", count: 75 },
];

const chartConfig = {
  count: {
    label: "Số lượng",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Analytics_BarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Biểu đồ cột</CardTitle>
        <CardDescription>
          Thống kê số lượng bài viết, tài liệu, thông báo, yêu cầu
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={150}>
            {/* Định nghĩa gradient màu xanh dương */}
            <BarChart data={chartData} barSize={50}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0072ff" />
                  <stop offset="100%" stopColor="#004b8d" />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              {/* Áp dụng gradient vào fill của cột */}
              <Bar dataKey="count" fill="url(#colorGradient)" radius={5} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
