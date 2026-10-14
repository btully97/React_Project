import { DateTime } from "luxon";
import { Button, Heading, Input } from "@chakra-ui/react";
import React from "react";

export const BirthdayCountdown = () => {
const [selectedDate, setSelectedDate] = React.useState<string | null>(null);
const [daysUntilBirthday, setDaysUntilBirthday] = React.useState<number | null>(null);


const handleDateChange = React.useCallback((date: string | null) => {
    setSelectedDate(date);
}, []);

const handleButtonClick = React.useCallback(() => {
    if (selectedDate) {
        const now = DateTime.now();
        const birthday = DateTime.fromISO(selectedDate);
        const nextBirthday = birthday.set({ year: now.year });
        setDaysUntilBirthday(nextBirthday.diff(now, "days").days)  ;
    } else {
        alert("Please select a date first.");
    }
}, [selectedDate]);

    return (
        <div>
            <Heading as="h1" size="lg">
                Birthday Countdown
            </Heading>
           <Input placeholder="Enter your birthday" type="date" onChange={(e) => handleDateChange(e.target.value)} />
           <Button size="lg" mt={4} onClick={handleButtonClick}>
            Start Countdown 
          </Button>

          {daysUntilBirthday !== null && (
            <Heading as="h2" size="md" mt={6}>
              There are {Math.ceil(daysUntilBirthday)} days until your next birthday!
            </Heading>
          )}
        </div>
    );
};
