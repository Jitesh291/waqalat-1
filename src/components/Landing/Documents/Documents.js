import React, {useEffect} from 'react';
import {fetchDocuments} from '../../../actions/documents';
import {connect} from 'react-redux'

function Document(props) {
    useEffect(() => {
        if(props.documents.status === 'INITIAL') props.fetchDocuments()
    })
  return (
    <React.Fragment>
        Loaded documents
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

export default connect(mapStateToProps, mapDispatchToProps)(Document);
