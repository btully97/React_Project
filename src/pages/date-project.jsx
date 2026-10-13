import React from "react";
import { DateTime } from "luxon";
import { Heading } from "@chakra-ui/react";
const exampleData = [
    {
        title: "Finish README",
        dueAt: "2023-06-01"
    },
    {
        title: "Review pull request",
        dueAt: DateTime.now().setZone("America/New_York").plus({ days: 1 }).toISODate()  // They'll always review it tomorrow.
    },
    {
        title: "Write documentation",
        dueAt: DateTime.now().setZone("UTC+8").minus({ days: 7 }).toISODate()  // They'll always write it in a week.
    }
];
const DateProject = () => {
    return (
        <div>
            <Heading as="h1" size="lg">
                A simple data project for testing date functionality.
            </Heading>
            <p>This is a simple to do type project that anyone could add work items to. They'd be set in the user's actual local time zone and then converted to the user's local time zone when being displayed.</p>
            <ul>
                {exampleData.map((item, index) => (
                    <li key={index}>
                        <h2>{item.title}</h2>
                        <p>Due: {DateTime.fromISO(item.dueAt).setZone("local").toLocaleString(DateTime.DATE_FULL)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DateProject;