import React, { useEffect, useState, useCallback } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { fetchDocuments } from '../../../actions/documents';
import OutlineCard from './OutlineCard';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

const useStyles = makeStyles({
    gridContainer: {
        margin: '10px',
        paddingLeft: "40px",
        paddingRight: "40px"
    },
    docuContainer: {
        height: '100%'
    }
});

function Document(props) {
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        if (props.documents.status === 'INITIAL') props.fetchDocuments()
        if (props.documents.status === 'AVAILABLE') setDocuments(props.documents.documents.data)
    },[props, props.documents])
    const getFields = useCallback((id) => {
        props.history.push(`documents/${id}`);
    }, [props.history])
    const classes = useStyles();
    const isLoading = props.documents.status === 'INITIAL' ? true : false;
    return (
        <React.Fragment>
{ !isLoading ?
            <div style={{minHeight: '40vh'}}>
            <Grid
                container
                spacing={4}
                className={classes.gridContainer}
                justify="flex-start"
            >
                {
                    documents.length > 0 && documents.map((doc, i) => {
                        return <Grid item key={i} xs={12} sm={6} md={4}>
                            <OutlineCard key={i} documentName={doc.name} id={doc.id} getFields={getFields} {...props} />
                        </Grid>
                    })

                }

            </Grid></div>
: <div style={{padding:'40px'}}><CircularProgress /></div>
}        </React.Fragment>
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
