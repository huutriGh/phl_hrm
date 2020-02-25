import {
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  List as ListIcon
} from '@material-ui/icons';
import React from 'react';
import FunctionTabs from '../../components/Tabs/FunctionTabs.component';
import ChiDinhKhamBenh from './../../components/ChiDinhKhamBenh/ChiDinhKhamBenh';

const useStyles = makeStyles(theme => ({
  root: {
    // marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    flexGrow: 1,
    margin: 10
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '10px',
    color: theme.palette.text.secondary
  },
  formControl: {
    // minWidth: 120
  },
  button: theme.palette.successColor,
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  gridFixed: {
    position: 'static'
  }
}));
const Reception = () => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        direction='column'
        alignItems='flex-start'
        component={classes.position}
      >
        <Grid item>
          <ButtonGroup
            variant='contained'
            size='small'
            color='secondary'
            aria-label='large contained secondary button group'
          >
            <Button startIcon={<AddIcon />}>Thêm</Button>
            <Button startIcon={<EditIcon />}>Sửa</Button>
            <Button startIcon={<SaveIcon />}>Lưu</Button>
            <Button startIcon={<DeleteIcon />}>Xóa</Button>
            <Button startIcon={<ListIcon />}>Danh sách</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              label='MÃ Y TẾ'
              helperText=''
              variant='standard'
              fullWidth
              size='small'
              margin='dense'
            />
            <TextField
              label='HỌ TÊN'
              helperText=''
              variant='standard'
              fullWidth
              size='small'
              margin='dense'
            />
            <TextField
              id='ngay-sinh'
              label='NGÀY SINH'
              type='date'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id='nam-sinh'
              label='NĂM SINH'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <FormControl
              variant='standard'
              className={classes.formControl}
              fullWidth
              size='small'
              margin='dense'
            >
              <InputLabel
                ref={inputLabel}
                id='ly-do-tiep-nhan-label'
                margin='dense'
              >
                LÝ DO TIẾP NHẬN
              </InputLabel>
              <Select
                labelId='ly-do-tiep-nhan-label'
                id='ly-do-tiep-nhan'
                labelWidth={labelWidth}
                value=''
                fullWidth
              >
                <MenuItem value=''></MenuItem>
                <MenuItem value='M'>Khám bệnh</MenuItem>
                <MenuItem value='F'>Khác</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              variant='standard'
              className={classes.formControl}
              fullWidth
              size='small'
              margin='dense'
            >
              <InputLabel
                ref={inputLabel}
                id='bac-si-chi-dinh-label'
                margin='dense'
              >
                BS CHI DINH
              </InputLabel>
              <Select
                labelId='bac-si-chi-dinh-label'
                id='bac-si-chi-dinh'
                labelWidth={labelWidth}
                value=''
                fullWidth
              >
                <MenuItem value=''></MenuItem>
                <MenuItem value='M'>Tự đến</MenuItem>
                <MenuItem value='F'>Khác</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='ĐỊA CHỈ LIÊN HỆ'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <TextField
              label='SỐ NHÀ'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <Grid container direction='row' spacing={2}>
              <Grid item xs={4}>
                <FormControl
                  variant='standard'
                  className={classes.formControl}
                  fullWidth
                  size='small'
                  margin='dense'
                >
                  <InputLabel
                    ref={inputLabel}
                    id='province-label'
                    margin='dense'
                  >
                    TỈNH/THÀNH
                  </InputLabel>
                  <Select
                    labelId='province-label'
                    id='province'
                    labelWidth={labelWidth}
                    value=''
                    fullWidth
                  >
                    <MenuItem value=''></MenuItem>
                    <MenuItem value='M'>Trà Vinh</MenuItem>
                    <MenuItem value='F'>Tiền Giang</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl
                  variant='standard'
                  className={classes.formControl}
                  fullWidth
                  size='small'
                  margin='dense'
                >
                  <InputLabel
                    ref={inputLabel}
                    id='quan-huyen-label'
                    margin='dense'
                  >
                    QUẬN/HUYỆN
                  </InputLabel>
                  <Select
                    labelId='quan-huyen-label'
                    id='quan-huyen'
                    labelWidth={labelWidth}
                    value=''
                    fullWidth
                  >
                    <MenuItem value=''></MenuItem>
                    <MenuItem value='M'>Quận 1</MenuItem>
                    <MenuItem value='F'>Quận 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl
                  variant='standard'
                  className={classes.formControl}
                  fullWidth
                  size='small'
                  margin='dense'
                >
                  <InputLabel ref={inputLabel} id='ward-label' margin='dense'>
                    PHƯỜNG/XÃ
                  </InputLabel>
                  <Select
                    labelId='ward-label'
                    id='ward'
                    labelWidth={labelWidth}
                    value=''
                    fullWidth
                  >
                    <MenuItem value=''></MenuItem>
                    <MenuItem value='M'>Phường 1</MenuItem>
                    <MenuItem value='F'>Phường 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <TextField
              label='SỐ TIẾP NHẬN'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <FormControl
              variant='standard'
              className={classes.formControl}
              fullWidth
              size='small'
              margin='dense'
            >
              <InputLabel
                ref={inputLabel}
                id='demo-simple-select-outlined-label'
                margin='dense'
              >
                GIỚI TÍNH
              </InputLabel>
              <Select
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                labelWidth={labelWidth}
                value=''
                fullWidth
              >
                <MenuItem value=''></MenuItem>
                <MenuItem value='M'>Nam</MenuItem>
                <MenuItem value='F'>Nữ</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='NGHỀ NGHIỆP'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <TextField
              label='SỐ ĐIỆN THOẠI'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <TextField
              label='DÂN TỘC'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <FormControl
              variant='standard'
              className={classes.formControl}
              fullWidth
              size='small'
              margin='dense'
            >
              <InputLabel ref={inputLabel} id='ma-icd-label' margin='dense'>
                MÃ ICD
              </InputLabel>
              <Select
                labelId='ma-icd-label'
                id='ma-icd'
                labelWidth={labelWidth}
                value=''
                fullWidth
              >
                <MenuItem value=''></MenuItem>
                <MenuItem value='M'>ICD 1</MenuItem>
                <MenuItem value='F'>ICD 2</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='CHẨN ĐOÁN'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
              multiline
              rowsMax={3}
            />

            <TextField
              label='NGƯỜI LIÊN HỆ'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <TextField
              label='TIỀN SỬ BỆNH'
              fullWidth
              variant='standard'
              margin='dense'
              multiline
              rowsMax={3}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label='TIẾP NHẬN LÚC'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <FormControl
              variant='standard'
              className={classes.formControl}
              fullWidth
              size='small'
              margin='dense'
            >
              <InputLabel ref={inputLabel} id='object-label' margin='dense'>
                ĐỐI TƯỢNG
              </InputLabel>
              <Select
                labelId='object-label'
                id='object'
                labelWidth={labelWidth}
                value=''
                fullWidth
              >
                <MenuItem value=''></MenuItem>
                <MenuItem value='M'>BHYT</MenuItem>
                <MenuItem value='F'>DỊCH VỤ</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='SỐ BẢO HIỂM Y TẾ'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <TextField
              label='TỪ NGÀY'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <TextField
              label='ĐẾN NGÀY'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />

            <FormControl
              variant='standard'
              className={classes.formControl}
              fullWidth
              size='small'
              margin='dense'
            >
              <InputLabel ref={inputLabel} id='hospital-label-1' margin='dense'>
                NƠI ĐĂNG KÝ
              </InputLabel>
              <Select
                labelId='hospital-label-1'
                id='hospital-1'
                labelWidth={labelWidth}
                value=''
                fullWidth
              >
                <MenuItem value=''></MenuItem>
                <MenuItem value='M'>Bệnh viện Trà Vinh</MenuItem>
                <MenuItem value='F'>Bệnh viện Cầu Ngang</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant='standard'
              className={classes.formControl}
              fullWidth
              size='small'
              margin='dense'
            >
              <InputLabel ref={inputLabel} id='hospital-label-2' margin='dense'>
                TUYẾN KB
              </InputLabel>
              <Select
                labelId='hospital-label-2'
                id='hospital-2'
                labelWidth={labelWidth}
                value=''
                fullWidth
              >
                <MenuItem value=''></MenuItem>
                <MenuItem value='M'></MenuItem>
                <MenuItem value='F'></MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='NGÀY ĐỦ 5 NĂM'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
            <TextField
              label='NGÀY MIỄN CCT'
              fullWidth
              variant='standard'
              size='small'
              margin='dense'
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <FunctionTabs
          tab={[
            { component: <ChiDinhKhamBenh />, label: 'CHỈ ĐỊNH DỊCH VỤ' },
            { component: null, label: 'LỊCH SỬ KHÁM' }
          ]}
        />
      </Paper>
    </div>
  );
};

export default Reception;
