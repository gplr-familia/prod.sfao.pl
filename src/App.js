import React from 'react';
import {Admin, Resource} from 'react-admin';

import restClient from './providers/rest';
import uploadClient from './providers/upload';
import authClient from './providers/auth';
import messages from './translations/pl';
import Dashboard from './dashboard/Dashboard';
import CustomRoutes from './routes';

import UserList from './resources/users/list';
import UserShow from './resources/users/show';
import UserEdit from './resources/users/edit';
import UserCreate from './resources/users/create';
import GroupList from './resources/groups/list';
import GroupEdit from './resources/groups/edit';
import GroupCreate from './resources/groups/create';
import MeasurementEdit from './resources/measurements/edit';
import MeasurementList from './resources/measurements/list';
import MeasurementCreate from './resources/measurements/create';
import MeasurementTypeEdit from './resources/measurement_types/edit';
import MeasurementTypeList from './resources/measurement_types/list';
import MeasurementTypeCreate from './resources/measurement_types/create';
import RecommendationEdit from './resources/recommendations/edit';
import RecommendationList from './resources/recommendations/list';
import RecommendationCreate from './resources/recommendations/create';
import ThreadList from './resources/threads/list';
import ThreadShow from './resources/threads/show';
import ThreadCreate from './resources/threads/create';
import {MediaObjectList} from './resources/media_objects';
import {InformationForPatientsCreate, InformationForPatientsList} from './resources/information_for_patients';
import {
  ImagingExaminationsCreate,
  ImagingExaminationsList,
  ImagingExaminationsShow,
} from './resources/imaging_examinations';
import {
  AppointmentList,
  AppointmentEdit,
  AppointmentCreate,
} from './resources/appointments';
import {Create as DeviceCreate, Edit as DeviceEdit, List as DeviceList} from './resources/devices/index';
import MessageEdit from './resources/messages/edit';
import {DietRecommendationList, DietRecommendationEdit, DietRecommendationCreate} from './resources/diet_recommendations/index';
import {MealList, MealEdit, MealCreate} from './resources/meals/index';
import {DrugList, DrugEdit, DrugCreate} from './resources/drugs/index';
import {PhysicalEffortList, PhysicalEffortEdit, PhysicalEffortCreate} from './resources/physical_efforts/index';
import {SummaryList, SummaryEdit, SummaryCreate} from './resources/summaries/index';

import './App.css';
import Layout from './layout/Layout';

import notificationSaga from './sagas/notificationSaga';
import loggerSaga from './sagas/loggerSaga';

import notificationsReducer from './reducers/notificationsReducer';

const i18nProvider = locale => messages[locale];

export default () => (
  <Admin
    locale="pl"
    title="SFAO"
    authProvider={authClient}
    dataProvider={uploadClient(restClient)}
    i18nProvider={i18nProvider}
    dashboard={Dashboard}
    customRoutes={CustomRoutes}
    appLayout={Layout}
    customSagas={[notificationSaga, loggerSaga]}
    customReducers={{
      custom_notifications: notificationsReducer
    }}
  >
    {permissions => [
      <Resource
        name="users"
        list={permissions.includes('USERS_LIST') ? UserList : null}
        show={permissions.includes('USERS_SHOW') ? UserShow : null}
        edit={permissions.includes('USERS_EDIT') ? UserEdit : null}
        create={permissions.includes('USERS_CREATE') ? UserCreate : null}
        options={{hide: !permissions.includes('USERS_LIST')}}/>,
      <Resource
        name="media_objects"
        list={permissions.includes('MEDIA_OBJECTS_LIST') ? MediaObjectList : null}
      />,
      <Resource
        name="devices"
        list={permissions.includes('DEVICE_LIST') ? DeviceList : null}
        edit={permissions.includes('DEVICE_EDIT') ? DeviceEdit : null}
        create={permissions.includes('DEVICE_CREATE') ? DeviceCreate : null}
        options={{hide: !permissions.includes('DEVICE_LIST')}}
      />,
      permissions.includes('GROUPS_LIST') ? <Resource
        name="groups"
        list={permissions.includes('GROUPS_LIST') ? GroupList : null}
        edit={permissions.includes('GROUPS_EDIT') ? GroupEdit : null}
        create={permissions.includes('GROUPS_CREATE') ? GroupCreate : null}/> : null,
      <Resource
        name="measurements"
        list={MeasurementList}
        edit={MeasurementEdit}
        create={MeasurementCreate}/>,
      <Resource
        name="recommendations"
        list={RecommendationList}
        edit={permissions.includes('RECOMMENDATIONS_EDIT') ? RecommendationEdit : null}
        create={permissions.includes('RECOMMENDATIONS_CREATE') ? RecommendationCreate : null}/>,
      <Resource
        name="measurement_types"
        list={permissions.includes('MEASUREMENT_TYPES_LIST') ? MeasurementTypeList : null}
        edit={permissions.includes('MEASUREMENT_TYPES_EDIT') ? MeasurementTypeEdit : null}
        create={permissions.includes('MEASUREMENT_TYPES_CREATE') ? MeasurementTypeCreate : null}
        options={{hide: !permissions.includes('MEASUREMENT_TYPES_LIST')}}/>,
      <Resource
        name="information_for_patients"
        list={InformationForPatientsList}
        create={permissions.includes('INFORMATION_FROM_PATIENT_CREATE') ? InformationForPatientsCreate : null}
      />,
      <Resource
        name="imaging_examinations"
        list={ImagingExaminationsList}
        create={permissions.includes('IMAGING_EXAMINATIONS_CREATE') ? ImagingExaminationsCreate : null}
        show={ImagingExaminationsShow}
      />,
      permissions.includes('APPOINTMENTS_LIST') ? <Resource
        name="appointments"
        list={AppointmentList}
        create={permissions.includes('APPOINTMENTS_CREATE') ? AppointmentCreate : null}
        edit={permissions.includes('APPOINTMENTS_EDIT') ? AppointmentEdit : null}
      /> : null,
      permissions.includes('DIET_RECOMMENDATIONS_LIST') ? <Resource
        name="diet_recommendations"
        list={DietRecommendationList}
        create={permissions.includes('DIET_RECOMMENDATIONS_CREATE') ? DietRecommendationCreate : null}
        edit={permissions.includes('DIET_RECOMMENDATIONS_EDIT') ? DietRecommendationEdit : null}
      /> : null,
      permissions.includes('MEALS_LIST') ? <Resource
        name="meals"
        list={MealList}
        create={permissions.includes('MEALS_CREATE') ? MealCreate : null}
        edit={permissions.includes('MEALS_EDIT') ? MealEdit : null}
      /> : null,
      permissions.includes('DRUGS_LIST') ? <Resource
        name="drugs"
        list={DrugList}
        create={permissions.includes('DRUGS_CREATE') ? DrugCreate : null}
        edit={permissions.includes('DRUGS_EDIT') ? DrugEdit : null}
      /> : null,
      permissions.includes('PHYSICAL_EFFORTS_LIST') ? <Resource
        name="physical_efforts"
        list={PhysicalEffortList}
        create={permissions.includes('PHYSICAL_EFFORTS_CREATE') ? PhysicalEffortCreate : null}
        edit={permissions.includes('PHYSICAL_EFFORTS_EDIT') ? PhysicalEffortEdit : null}
      /> : null,
      permissions.includes('SUMMARIES_LIST') ? <Resource
        name="summaries"
        list={SummaryList}
        create={permissions.includes('SUMMARIES_CREATE') ? SummaryCreate : null}
        edit={permissions.includes('SUMMARIES_EDIT') ? SummaryEdit : null}
        options={{hide: true}}
      /> : null,
      <Resource
        name="threads/my"
        list={ThreadList}
        edit={ThreadShow}
        create={ThreadCreate}
      />,
      <Resource name="messages" edit={MessageEdit} options={{hide: true}}/>,
      <Resource name="notifications" options={{hide: true}}/>,
    ]}
  </Admin>
);
