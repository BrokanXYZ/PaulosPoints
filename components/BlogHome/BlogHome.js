import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import BlogSummaryCard from './BlogSummaryCard.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  bodyTextContainer: {
    textAlign: 'left'
  },
  blogGrid: {
    marginTop: theme.spacing(8),
  }
}));


export default function BlogHome(props) {
  const classes = useStyles();
  const { blogPosts } = props;


  const extractAuthor = (blogContent) => {

    let extractedAuthor = "Not Available";
    let start = 0;
    let end = 0;
    let tempCount = 0;
    let index = 0;

    while(index < blogContent.length && tempCount !==2){
      if(blogContent[index]==='>'){
        tempCount++
      }

      index++;
    }

    start = index;
    tempCount = 0;

    while(index < blogContent.length && tempCount !==1){
      if(blogContent[index]==='<'){
        tempCount++
      }

      index++;
    }

    end = index;
    extractedAuthor = blogContent.substr(start, end-start-1);

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
      <Typography variant="h3" id="Blog" className={classes.title}>Blog</Typography>
      <Grid container direction="row" justify="space-evenly" spacing={10} className={classes.blogGrid}>
        {blogPosts.slice(0,3).map(blogPost => 
          {

            const extractedAuthor = extractAuthor(blogPost.content);
            const authorPicture = getAuthorPicture(extractedAuthor);
            const authorInitials = getAuthorInitials(extractedAuthor);            

            const blogPostDateWithoutTime = blogPost.pubDate.substr(0,10);
            const blogPostMomentDate = moment(blogPostDateWithoutTime, "YYYY-MM-DD");
            const blogPostMomentDateString = blogPostMomentDate.format("MMM D, YYYY");

            return(
              <Grid item xs={12} sm={4} key={blogPost.title}>
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
        <Grid item xs={12} sm={4}>
        </Grid>
        <Grid item xs={12} sm={4}>
        </Grid>
        <Grid item xs={12} sm={4}>
        </Grid>
      </Grid>
    </Container>
  );
}