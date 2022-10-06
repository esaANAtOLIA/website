import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Badges from '../Badges';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Article = () => {
  const [article, setArticle] = useState();
  const { id } = useParams();


  useEffect(() => {
    if (id) {
      getSingleArticle();
    }
    // eslint-disable-next-line
  }, [id]);

  const getSingleArticle = async () => {
    const response = await axios.get(`https://my-json-server.typicode.com/rizzingrezz/test-json/articles/${id}`);
    if (response.status === 200) {
      setArticle(response.data);
    } else {
      toast.error("Something went wrong");
    }
    document.title = "ANAtOLIA | " + response.data.title;
  };
  
  const styleInfo = {
    marginRight: "3em",
    float: "right",
    marginTop: "20px",
  }

  return (
    <>
      <Container sx={{ border: "1px solid #d1ebe8" }}>
        <Link style={{ textDecoration: "none", color: "#242424" }} to={`/`}>
          <ArrowBackIcon style={{ height: "2em", width: '2em' }} />
        </Link>
        <Typography component="h1" variant='h2' sx={{ textAlign: "center", pb: 2, fontSize: { sm: '3em', xs: '2em' } }}>{article && article.title}</Typography>
        <img
          src={article && article.imageUrl}
          className="img-fluid rounded"
          alt={article && article.title}
          style={{ width: "100%", maxHeight: "500px" }}
        />
        <div style={{ marginTop: "20px" }}>
          <div style={{ height: "43px", background: "#f6f6f6", overflow: "hidden" }}>
            <CalendarMonthIcon style={{ float: "left", marginTop: "10px" }} />
            <strong style={{ float: "left", marginTop: "12px", marginLeft: "2px" }}>
              {article && article.date}
            </strong>
            <Badges styleInfo={styleInfo}>{article && article.category}</Badges>
          </div>
          <Typography sx={{ whiteSpace: "pre-line", my: 3, pl: 0 }}>
            {article && article.description}
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default Article;