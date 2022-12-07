import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@mui/material";
import { books } from "../assets/books";

const LibraryPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "89vw",
        maxHeight: "95vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "3%",
        rowGap: "3%",
        margin: "10% 0"
      }}
    >
      {books.map(book => (
        <Card key={book.bookId} sx={{
          position: "relative",
          minHeight: "50px",
          maxHeight: "175px"
        }}>
          <CardContent sx={{
            width: "85%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            border: "5px solid green"
          }}>
            <Typography
              color="text.secondary"
              gutterBottom
            >
              {book.bookName}
            </Typography>

            <Typography sx={{}}>
              {book.bookAuthor}
            </Typography>

            <Typography variant="body2" sx={{
              border: "5px solid red",
              display: "flex"
            }}>{book.tags}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{
              position: "absolute",
              bottom: "0.1%",
              right: "0.1%"
            }}>More...</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default LibraryPage;

