import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface ClockProps {
  timezone: string;
  label: string;
}

export function LiveClock({ timezone, label }: ClockProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setTime(formatter.format(new Date()));
      } catch (e) {
        setTime("--:--:--");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="bg-white rounded-lg p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-primary" />
        <h3 className="font-semibold text-foreground text-sm">{label}</h3>
      </div>
      <p className="text-lg font-mono font-bold text-primary">{time}</p>
    </div>
  );
}

export function ClocksSection() {
  const timezones = [
    { timezone: "Africa/Cairo", label: "Egypt" },
    { timezone: "Asia/Dubai", label: "UAE" },
    { timezone: "Asia/Shanghai", label: "China" },
    { timezone: "Europe/Istanbul", label: "Turkey" },
    { timezone: "America/New_York", label: "USA" },
  ];

  // China timezone is already included above (Asia/Shanghai)

  return (
    <div className="bg-muted/50 rounded-lg p-6 border border-border">
      <h2 className="text-xl font-bold text-foreground mb-4">Live Times</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {timezones.map((tz) => (
          <LiveClock
            key={tz.timezone}
            timezone={tz.timezone}
            label={tz.label}
          />
        ))}
      </div>
    </div>
  );
}
