import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetchFields } from '../../../actions/fields';

function UserForm(props) {
    useEffect(()=>{
        if(props.field.status === 'INITIAL') props.fetchFields(props.id);
    })

    const { id } = useParams();
    console.log(id);
    return (
        <div>
            Hello from UserForm
        </div>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

