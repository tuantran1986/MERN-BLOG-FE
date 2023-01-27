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


// 
export default function PostList() {
  return (
    <>
      <Grid container spacing={2}>
        
        {/*  */}
        <Grid item xs={4}>
          <Item>
            <PostDetail />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <PostDetail />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <PostDetail />
          </Item>
        </Grid>

        {/*  */}
        <Grid item xs={4}>
          <Item>
            <PostDetail />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <PostDetail />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <PostDetail />
          </Item>
        </Grid>

        {/*  */}

      </Grid>
    </>
  )
}
