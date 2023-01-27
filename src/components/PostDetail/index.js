import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function PostDetail() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    // RETURN
    return (
        <Card sx={{ maxWidth: 600 }}>

            {/* 1. HEADER */}
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />

            {/* 2. IMAGE */}
            <CardMedia
                component="img"
                // height="194"
                height="400"                
                // image="/static/images/cards/paella.jpg"
                image="data:image/jpeg;base64,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"
                alt="Paella dish"
            />

            {/* 3. TITLE */}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"  style={{ color: 'rebeccapurple' }}>
                    <span style={{ fontSize: '16px' }}>168</span>
                    <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    style={{ color: 'rebeccapurple' }}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            {/* 4. CONTENT */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}