"use client";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = [
  "#dc2626",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#a855f7",
  "#ec4899",
];

export function CategoryBreakdown({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  if (data.length === 0) {
    return (
      <p className="text-neutral-500 font-roboto text-sm py-12 text-center">
        No expenses yet — add a transaction to see your breakdown.
      </p>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={95}
          paddingAngle={2}
        >
          {data.map((_, idx) => (
            <Cell key={idx} fill={COLORS[idx % COLORS.length]} stroke="none" />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => [`₹${value}`, "Spent"]}
          contentStyle={{
            backgroundColor: "#171717",
            border: "1px solid #404040",
            borderRadius: 8,
            fontFamily: "Roboto",
            fontSize: 13,
          }}
          itemStyle={{ color: "#fafafa" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function SpendingTrend({
  data,
}: {
  data: { date: string; income: number; expense: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        style={{
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#262626"
          vertical={false}
          strokeOpacity={0.5}
        />
        <XAxis
          dataKey="date"
          stroke="#737373"
          fontSize={11}
          fontFamily="Roboto"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#737373"
          fontSize={11}
          fontFamily="Roboto"
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          formatter={(value) => `₹${value}`}
          contentStyle={{
            backgroundColor: "#171717",
            border: "1px solid #404040",
            borderRadius: 8,
            fontFamily: "Roboto",
            fontSize: 13,
          }}
          itemStyle={{ color: "#fafafa" }}
        />
        <Bar dataKey="income" fill="#22c55e" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expense" fill="#dc2626" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
