export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
        const { operation, a, b } = req.query;
        const numA = parseInt(a);
        const numB = parseInt(b);
        let result = 0;

        switch(operation) {
            case "add":
                result = numA + numB;
                break;
            case "subtract":
                result = numA - numB;
                break;
            case "multiply":
                result = numA * numB;
                break;
            case "divide":
                result = numA / numB;
                break;
        }

        res.send(result.toString());
    });
}
