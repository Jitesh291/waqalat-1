import React, { useEffect, useState, useCallback } from 'react';
import {Grid,Card, CardContent} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { fetchDocuments } from '../../../actions/documents';
import OutlineCard from './OutlineCard';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

const useStyles = makeStyles({
    gridContainer: {
        margin:'10px',
      paddingLeft: "40px",
      paddingRight: "40px",
      height: '100%'
    },
    docuContainer: {
        height: '100%'
    }
  });

function Document(props) {
    const [documents, setDocuments] = useState([]);
    const [id, setId] = useState(null);
    useEffect(() => {
        if (props.documents.status === 'INITIAL') props.fetchDocuments()
        if (props.documents.status === 'AVAILABLE') setDocuments(props.documents.documents)
    })
    const getFields = useCallback((id) => {
        setId(id);
        // props.fetchFields(id);
        props.history.push(`fields/${id}`);
        
    }, [id])
    const classes = useStyles();
    console.log(documents)
    return (
        <React.Fragment>
            
            <Grid
                container
                spacing={4}
                className={classes.gridContainer}
                justify="left"
            >
                {
                    documents.length > 0 && documents.map((item, i) => {
                        return <Grid xs={12} sm={6} md={4}>
                                    <OutlineCard documentName={item.name} id={item.id} getFields={getFields} {...props}/>
                                </Grid>
                    })

                }
                
            </Grid>
    </React.Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Document));
