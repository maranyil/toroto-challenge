import { v4 as uuidv4 } from 'uuid';

const verifyClient = [
    {
        id: 0,
        name: "Bici Panchita",
        offsets: 105,
        emissions: 105,
        date: "02/04/2020",
        tag: "Verified",
        serial: uuidv4()
    },
    {
        id: 1,
        name: "Holanda",
        offsets: 16,
        emissions: 227,
        date: "22/02/2021",
        tag: "Pending",
        serial: uuidv4()
    },
    {
        id: 2,
        name: "Maskota",
        offsets: 318,
        emissions: 335,
        date: "19/11/2019",
        tag: "Verified",
        serial: uuidv4()
    },
    {
        id: 3,
        name: "Tzopielic Textil",
        offsets: 56,
        emissions: 56,
        date: "27/01/2021",
        tag: "Verified",
        serial: uuidv4()
    }
]

export default verifyClient;
