import React from 'react';
import moment from 'moment';

import { makeStyles } from '@mui/styles';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { spacing } from '../../components/Layout/theme';
import BlogSummaryCard from './BlogSummaryCard.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(15),
    marginBottom: spacing(15),
  },
  title: {
    marginBottom: spacing(4),
  },
  bodyTextContainer: {
    textAlign: 'left'
  },
  blogGrid: {
    marginTop: spacing(8),
  }
}));


export default function BlogHome(props) {
  const classes = useStyles();
  const { blogPosts } = props;


  const extractAuthor = (blogContent) => {

    let extractedAuthor = "Not Available";
    let start = -1;
    let end = -1;
    let index = 0;

    while(index < blogContent.length && start == -1){
      if(blogContent[index]==='y'){
        start = index+2;
      }
      index++;
    }

    while(index < blogContent.length && end == -1){
      if(blogContent[index]==='<'){
        end = index
      }
      index++;
    }

    extractedAuthor = blogContent.substr(start, end-start);
    return extractedAuthor;
  };

  const getAuthorPicture = (author) => {

    let authorPicture = null;
    const authorWithoutSpecialSpaces = author.replace(/\s+/g, " ");

    switch(authorWithoutSpecialSpaces){
      case "Ashraf Moursi":
        authorPicture = "/cardProfileImgs/ashrafProfile.jpg";
        break;
      case "Alex Sangster":
        authorPicture = "/cardProfileImgs/alexProfile.jpg";
        break;
      case "Brok Stafford":
        authorPicture = "/cardProfileImgs/brokProfile.jpg";
        break;
      case "Dev Nair":
        authorPicture = "/cardProfileImgs/devProfile.jpg";
        break;
      case "Jackson Beard":
        authorPicture = "/cardProfileImgs/jacksonProfile.jpg";
        break;
      case "Ian Stone":
        authorPicture = "/cardProfileImgs/ianProfile.jpg";
        break;
      
    }

    return authorPicture;
  };

  const getAuthorInitials = (author) => {
    let initials = "";

    for(let x=0; x<author.length; x++){
      if(author[x] == author[x].toUpperCase()){
        initials += author[x];
      }
    }

    return initials;
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" id="Blog" className={classes.title}>Recent Blog Posts</Typography>
      <Grid container direction="row" justify="space-evenly" spacing={10} className={classes.blogGrid}>
        {blogPosts.slice(0,3).map(blogPost => 
          {
            const extractedAuthor = extractAuthor(blogPost.content);
            const authorPicture = getAuthorPicture(extractedAuthor);
            const authorInitials = getAuthorInitials(extractedAuthor);            

            const blogPostMomentDate = moment(blogPost.published);
            const blogPostMomentDateString = blogPostMomentDate.format("MMM D, YYYY");

            return(
              <Grid item size={{xs: 12, sm: 4}} key={blogPost.title}>
                <BlogSummaryCard
                  title={blogPost.title}
                  author={extractedAuthor}
                  authorPicture={authorPicture}
                  authorInitials={authorInitials}
                  date={blogPostMomentDateString}
                  link={blogPost.link}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </Container>
  );
}