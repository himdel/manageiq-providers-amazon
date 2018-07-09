import React from 'react';
import PropTypes from 'prop-types';
import { AmazonSecurityGroupForm } from '@manageiq/react-ui-components/dist/amazon-security-form-group';
import '@manageiq/react-ui-components/dist/amazon-security-form-group.css';

const API = window.API;

const getData = () => API.get("/api/cloud_networks/?attributes=ems_ref,name,type&expand=resources&filter[]=type='ManageIQ::Providers::Amazon*'")
  .then(data => data.resources.map(resource => ({
    value: resource.ems_ref,
    label: resource.name,
  })));

const createGroups = (values, providerId) =>
  API.post(`/api/providers/${providerId}/security_groups`, {
    action: 'create',
    resource: { ...values },
  });

const CreateAmazonSecurityGroupForm = ({ providerId }) => (
  <AmazonSecurityGroupForm
    onSave={values => createGroups(values, providerId)}
    onCancel={() => console.log('Cancel clicked')}
    loadData={getData}
  />
);

CreateAmazonSecurityGroupForm.propTypes = {
  providerId: PropTypes.number.isRequired,
};

export default CreateAmazonSecurityGroupForm;