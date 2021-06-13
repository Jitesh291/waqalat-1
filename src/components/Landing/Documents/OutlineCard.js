import React, {useEffect, useState, useCallback} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PostAddIcon from '@material-ui/icons/PostAdd';
import { connect } from "react-redux";
import {fetchFields} from '../../../actions/fields';

const useStyles = makeStyles({
    root: {
        minWidth: 100,
        marginRight: '10px',
        marginBottom: 12
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

function OutlineCard(props) {
    const classes = useStyles();
    const [id, setId] = useState(null);
    useEffect(()=>{
        //if(props.field && props.field.status === 'AVAILABLE' && props.field.fieldsFetched && props.field.fieldsFetched.length > 0 && id) props.history.push(`./documents/${id}`)
    })
    const getFields = useCallback((id) => {
        // setId(id);
        // props.fetchFields(id);
        props.history.push(`./documents/${id}`);
        
    }, [id])
    return (

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    Document title
        </Typography>
                <Typography variant="h5" component="h2">
                    {props.documentName}
        </Typography>

            </CardContent>
            <CardActions>
                <Button 
                    variant="contained" 
                    size="small"
                    startIcon={<PostAddIcon />}
                    onClick={() => getFields(props.id)}
                >
                    Generate Document
                </Button>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        field: state.field
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchFields: (id) => dispatch(fetchFields(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OutlineCard);
