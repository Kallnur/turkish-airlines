export const fetchData = async () => {
    try {
        const response = await fetch('/tickets.json');
        const data = await response.json();
        return data.tickets;
    } catch (error) {
        console.error(error);
        throw error;
    }
}