import "./App.css";
import Box from "@mui/material/Box";
import PSTracker from "./components/PSTracker";
/*პრობლემა: როგორ მოვაგროვო მონაცემები ყველა ინდივიდუალური თრექერიდან, რომ შემდეგ ჩავუშვა რექორდსში და ცალკე გავაკეთო. თავისი თაიმსთემფით, და კომპიუტერის აიდით */
function App() {
  return (
    <Box
      sx={{
        width: 600,
        height: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2em",
        "&:hover": {
          backgroundColor: "white",
        },
      }}
    >
      {" "}
      <PSTracker></PSTracker>
      <PSTracker></PSTracker>
      <PSTracker></PSTracker>
      <PSTracker></PSTracker>
      <PSTracker></PSTracker>
    </Box>
  );
}

export default App;
