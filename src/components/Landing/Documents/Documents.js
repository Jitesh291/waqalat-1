import React, { useEffect } from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { fetchDocuments } from '../../../actions/documents';
import Card from './Card';
import { connect } from 'react-redux'

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    },
    docuContainer: {
        height: '100%'
    }
  });

function Document(props) {
    useEffect(() => {
        if (props.documents.status === 'INITIAL') props.fetchDocuments()
    })

    const classes = useStyles();
    return (
        <div className={classes.gridContainer}>
            Loaded
            <Grid
                container
                spacing={4}
                className={classes.docuContainer}
                justify="center"
            >
                {
                    props.documents && props.documents.documents && props.documents.documents.length > 0 && props.documents.documents.map((item, i) => {
                        <Grid item xs={12} sm={6} md={4}>
                            <Card documentName={item.name}/>
                        </Grid>
                    })

                }
                
            </Grid>
    </div>
  );
}

const mapStateToProps = state => {
    return {
                documents: state.documents
    }
}
const mapDispatchToProps = dispatch => {
    return {
                fetchDocuments: () => dispatch(fetchDocuments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Document);
