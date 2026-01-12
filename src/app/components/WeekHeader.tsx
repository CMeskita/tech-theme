
interface Day {
  label: string;
  date: string;
}

 
export default function WeekHeader(){
const days: Day[] = [
    { label: 'Sun', date: '09' },
    { label: 'Mon', date: '10' },
    { label: 'Tue', date: '11' },
    { label: 'Wed', date: '12' },
    { label: 'Thu', date: '13' },
    { label: 'Fri', date: '14' },
    { label: 'Sat', date: '15' },
  ];
    return(
        <div className="grid grid-cols-7 border-b border-gray-200">
      {days.map((day, index) => (
        <div
          key={day.label}
          className={`
            p-3.5 flex flex-col sm:flex-row items-center justify-between
            ${index !== days.length - 1 ? 'border-r border-gray-200' : ''}
          `}
        >
          <span className="text-sm font-medium text-gray-500">{day.label}</span>
          <span className="text-sm font-medium text-gray-900">{day.date}</span>
        </div>
      ))}
    </div>

    );
}