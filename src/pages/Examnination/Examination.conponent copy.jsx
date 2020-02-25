import {
  AppBar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PatientListDatatable from './../../components/PatientListDatatable/PatientListDatatable.component';
import FunctionTabs from './../../components/Tabs/FunctionTabs.component';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexGrow: 1
  },

  paper: {
    padding: 10
  },
  grid: {
    padding: theme.spacing(2)
  },
  gridItem: {
    display: 'flex',
    alignContent: 'center'
  },
  gridContainer: {
    marginRight: 0,
    marginBottom: 8
  },
  formControl: {
    // minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  title: {
    flex: '1 1 100%',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    marginLeft: theme.spacing(1),
    border: '1px',
    flex: 1,
    textAlign: 'center'
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

const tabFunction = [
  { label: 'Toa thuốc', component: 'Component' },
  { label: 'Toa cũ', component: 'Component' },
  { label: 'Toa màu', component: 'Component' },
  { label: 'Xét nghiệm', component: 'Component' },
  { label: 'Chẩn đoán hình ảnh', component: 'Component' }
];
const Examination = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <TextField
                  id='date'
                  label='Ngày khám'
                  type='date'
                  fullWidth
                  // className={classes.textField}
                  variant='outlined'
                  size='small'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Phòng khám'
                  value='Nội tổng quát'
                  size='small'
                  helperText=''
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Bác sĩ'
                  value='BS.CKII. Đỗ công thương'
                  size='small'
                  helperText=''
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Typography className={classes.title} variant='h4'>
                  Danh sách bệnh nhân
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <PatientListDatatable />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Grid container spacing={2} className={classes.gridContainer}>
              <Grid item xs={2}>
                <TextField
                  label='Mã barcode'
                  helperText=''
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Mã BN'
                  helperText=''
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label='Họ tên'
                  helperText=''
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>

              <Grid item xs={2}>
                <TextField
                  label='Phái'
                  helperText=''
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id='date'
                  label='Ngày sinh'
                  type='date'
                  fullWidth
                  // className={classes.textField}
                  variant='outlined'
                  size='small'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  label='Số thẻ'
                  helperText=''
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Từ ngày'
                  type='date'
                  variant='outlined'
                  InputLabelProps={{
                    shrink: true
                  }}
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Đến ngày'
                  type='date'
                  variant='outlined'
                  InputLabelProps={{
                    shrink: true
                  }}
                  size='small'
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.gridContainer}>
              <Grid item xs={1}>
                <TextField
                  label='Số nhà'
                  fullWidth
                  variant='outlined'
                  size='small'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Đường'
                  fullWidth
                  variant='outlined'
                  size='small'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Địa chỉ'
                  fullWidth
                  variant='outlined'
                  size='small'
                />
              </Grid>

              <Grid item xs={1}>
                <TextField
                  label='Dân tộc'
                  fullWidth
                  variant='outlined'
                  size='small'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Nghề nghiệp'
                  fullWidth
                  variant='outlined'
                  size='small'
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.gridContainer}>
              <Grid item xs={12}>
                <TextField
                  label='Chẩn đoán chính'
                  fullWidth
                  variant='outlined'
                  size='small'
                  multiline
                  rowsMax={3}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.gridContainer}>
              <Grid item xs={12}>
                <TextField
                  label='Chẩn đoán phụ'
                  fullWidth
                  variant='outlined'
                  size='small'
                  multiline
                  rowsMax={3}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.gridContainer}>
              <Grid item xs={3}>
                <AppBar position='static'>
                  <Tabs aria-label='simple tabs example' value={0}>
                    <Tab label='Xử trí' />
                  </Tabs>
                </AppBar>
                <List component='nav' aria-label='main mailbox folders'>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary='1. Cấp toa cho về' />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary='2. Chỉ định' />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary='3. Không toa' />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary='4. Nhập viện' />
                  </ListItem>
                </List>
                <Divider />
              </Grid>
              <Grid item xs={3}>
                <AppBar position='static'>
                  <Tabs aria-label='simple tabs example' value={0}>
                    <Tab label='Lịch sử khám' />
                  </Tabs>
                </AppBar>
                <List component='nav' aria-label='main mailbox folders'>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary='13/08/2019' />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary='22/12/2019' />
                  </ListItem>
                  <Divider />
                </List>
              </Grid>
              <Grid item xs={3}>
                <AppBar position='static'>
                  <Tabs aria-label='simple tabs example' value={0}>
                    <Tab label='Dấu hiệu sinh tồn' />
                  </Tabs>
                </AppBar>
                <List component='nav' aria-label='main mailbox folders'>
                  <Divider />
                  <ListItem>
                    <TextField label='Mạch' size='small' variant='outlined' />
                  </ListItem>

                  <ListItem>
                    <TextField
                      label='Huyết áp'
                      size='small'
                      variant='outlined'
                    />
                  </ListItem>

                  <ListItem>
                    <TextField label='BMI' size='small' variant='outlined' />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={3}>
                <AppBar position='static'>
                  <Tabs aria-label='simple tabs example' value={0}>
                    <Tab label='Kho thuốc' />
                  </Tabs>
                </AppBar>
                <List component='nav' aria-label='main mailbox folders'>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary='Bảo hiểm y tế' />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary='Dịch vụ' />
                  </ListItem>
                  <Divider />
                </List>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value='Hạn bảo hiểm y tế còn 262 ngày'
                  variant='outlined'
                  InputLabelProps={{
                    shrink: true
                  }}
                  size='small'
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FunctionTabs tab={tabFunction} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Examination;
