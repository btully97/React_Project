
import { TableBody, TableCell, TableColumnHeader, TableHeader, TableRoot, TableRow} from "@chakra-ui/react"
import {type User} from "../definitions/users";
import React from "react";
export const Users: React.FC = () => {
    const [sort, setSort] = React.useState({keytoSort: "Name", order: "asc"});
    const [users, setUsers] = React.useState<User[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    const handleSort = (key: string) => {   
        setSort({keytoSort: key, order: sort.order === "asc" ? "desc" : "asc"});
    }

    React.useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users", {signal: controller.signal});
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data: User[] = await res.json();

                console.log("Fetched data:", data);
                setUsers(data);
            } catch (error) {
                if ((error as Error).name !== "AbortError") {
                    setError((error as Error).message);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        return () => {
            controller.abort();
        }
    }, []);

    const sortedUsers = React.useMemo(() => {
        const sorted = [...users];
        sorted.sort((a, b) => {
            const aValue = a[sort.keytoSort as keyof User];
            const bValue = b[sort.keytoSort as keyof User];
            if (typeof aValue === "string" && typeof bValue === "string") {
                return sort.order === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            }
            return 0;
        });
        return sorted;
    }, [sort, users]);

    const headers = [
        {key: "id", label: "ID"},
        {key: "name", label: "Name"},
        {key: "username", label: "Username"},
        {key: "email", label: "Email"},
        {key: "address", label: "Address"},
        {key: "phone", label: "Phone"},
        {key: "website", label: "Website"},
        {key: "company", label: "Company"}
    ]

    return(
        <>       
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
               <TableRoot>
            <TableHeader>
                <TableRow>
                    {headers.map((header) => (
                        <TableColumnHeader onClick={() => handleSort(header.key)} key={header.key} cursor="pointer">
                            {header.label}
                            {sort.keytoSort === header.key && (sort.order === "asc" ? `▲` : `▼`)}
                        </TableColumnHeader>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {sortedUsers.map((user: User) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.website}</TableCell>
                        <TableCell>{`${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableRoot>
            )}
         
        </>

    )
}