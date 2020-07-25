import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 15,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    fontSize: 14,
    fontWeight: 'bold',
  },
}));




const sites = [
    {
        code:   "CHRE",
        url:    "https://chacabucoenred.com/",
        logo:   "/logos/CHRE.jpg",
        name:   "Chacabuco en Red",
        status: 1
    },
    {
        code:   "CUAP",
        url:    "https://cuatropalabras.com/",
        logo:   "/logos/CUAP.jpg",
        name:   "Cuatro Palabras",
        status: 1
    },
    {
        code:   "QPCH",
        url:    "https://quepensaschacabuco.com/",
        logo:   "/logos/QPCH.jpg",
        name:   "Que pensás Chacabuco",
        status: 1
    },
    {
        code:   "CHRO",
        url:    "https://chacabuquero.com.ar/",
        logo:   "/logos/CHRO.jpg",
        name:   "Chacabuquero",
        status: 1
    },
    {
        code:   "DDEM",
        url:    "https://www.diariodemocracia.com/ciudad/chacabuco/",
        logo:   "/logos/DDEM.jpg",
        name:   "Diario Democracia",
        status: 1
    },
    {
        code:   "DHOY",
        url:    "https://dehoy.com.ar/",
        logo:   "/logos/DHOY.jpg",
        name:   "Diario de Hoy",
        status: 1
    },
    {
        code:   "CHAC",
        url:    "https://chacabuco.gob.ar/",
        logo:   "/logos/CHAC.jpg",
        name:   "Municipalidad de Chacabuco",
        status: 1
    },
    {
        code:   "RLID",
        url:    "https://radioliderchacabuco.com.ar/",
        logo:   "/logos/RLID.jpg",
        name:   "Radio Lider Chacabuco",
        status: 1
    },
    {
        code:   "LPCH",
        url:    "https://lapostachacabuco.com/",
        logo:   "/logos/LPCH.jpg",
        name:   "La Posta de Chacabuco",
        status: 1
    }
   
    
];


//buscador
Array.prototype.findBy = function (column, value) {
    for (var i=0; i<this.length; i++) {
        var object = this[i];
        if (column in object && object[column] === value) {
            return object;
        }
    }
    return null;
}






export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const site = sites.findBy('code', props.site );

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <a href={site.url} title={site.name} target="_blank">
          <Avatar aria-label="recipe" className={classes.avatar} alt={site.name} src={site.logo}>
            {site.code}
          </Avatar>
          </a>
        }
        action={
          <IconButton aria-label="Ajustes">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <a href={props.url} title={props.title} target="_blank">
      <CardMedia
        className={classes.media}
        image={props.img} 
        title={props.title}
      />
      </a>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.excerpt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Agregar a favoritos">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Mostrar más"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}