import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import PostDetail from '../PostDetail';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// COMPONENT :
export default function PostList(props) {

  const postList = props.postList;

  console.log('data - postList: ', postList);

  // RENDER:
  return (
    <>
      <Grid container spacing={2}>

        {/* MAP - DATA */}

        {
          postList && postList.length
            ?
            postList.map(postInfo =>
              <Grid item xs={4}>
                <Item>
                  <PostDetail key={postInfo._id} postInfo={postInfo} />
                </Item>
              </Grid>
            )
            :
            <span>NO-DATA</span>
        }

      </Grid>
    </>
  )
}
