import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Datatable from '../../components/Datatable/Datatable.component';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: '10px',
    color: theme.palette.text.secondary
  }
}));
const ChiDinhKhamBenh = () => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={1}
        direction='row'
        alignItems='flex-start'
        component={classes.position}
      >
        <Grid item xs={1}>
          <TextField
            label='MÃ DỊCH VỤ'
            fullWidth
            variant='outlined'
            size='small'
            margin='dense'
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl
            variant='outlined'
            className={classes.formControl}
            fullWidth
            size='small'
            margin='dense'
          >
            <InputLabel
              ref={inputLabel}
              id='noi-thuc-hien-label-1'
              margin='dense'
            >
              NƠI THỰC HIỆN
            </InputLabel>
            <Select
              labelId='noi-thuc-hien-label-1'
              id='noi-thuc-hien-1'
              labelWidth={100}
              value=''
              fullWidth
            >
              <MenuItem value=''></MenuItem>
              <MenuItem value='M'>Phòng 1</MenuItem>
              <MenuItem value='F'>Phòng 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl
            variant='outlined'
            className={classes.formControl}
            fullWidth
            size='small'
            margin='dense'
          >
            <InputLabel ref={inputLabel} id='loai-gia-label' margin='dense'>
              LOẠI GIÁ
            </InputLabel>
            <Select
              labelId='loai-gia-label'
              id='loai-gia'
              labelWidth={labelWidth}
              value=''
              fullWidth
            >
              <MenuItem value=''></MenuItem>
              <MenuItem value='M'>Loại giá 1</MenuItem>
              <MenuItem value='F'>Loại giá 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <TextField
            label='SỐ LƯỢNG'
            fullWidth
            variant='outlined'
            size='small'
            margin='dense'
            value={1}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            label='ĐƠN GIÁ'
            fullWidth
            variant='outlined'
            size='small'
            margin='dense'
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            label='THÀNH TIỀN'
            fullWidth
            variant='outlined'
            size='small'
            margin='dense'
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={<Checkbox checked={false} value={false} color='primary' />}
            label='Không thu tiền'
          />
          <FormControlLabel
            control={<Checkbox checked={false} value={false} color='primary' />}
            label='Thu tiền sau'
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Datatable />
        </Grid>
      </Grid>
    </>
  );
};

export default ChiDinhKhamBenh;
