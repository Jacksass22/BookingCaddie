"use client";

interface BookingWidgetProps {
  calendarId?: string;
  minWidth?: string;
  height?: string;
  className?: string;
}

export function BookingWidget({
  calendarId = "EpuzUlMmYlHJI92zIsOl",
  minWidth = "320px",
  height = "700px",
  className = ""
}: BookingWidgetProps) {
  return (
    <div className={className} style={{ minHeight: height }}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${calendarId}`}
        style={{
          width: '100%',
          border: 'none',
          minWidth,
          height,
          minHeight: height,
          borderRadius: '12px',
        }}
        id={calendarId}
        title="Schedule a Demo"
        allow="geolocation; microphone; camera; payment"
      />
    </div>
  );
}
