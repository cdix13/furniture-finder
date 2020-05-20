import React, { useEffect, useState } from 'react';
import ToolbarMUI from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
    autocomplete: {
      padding: theme.spacing(3),
    },
    textField: {
      backgroundColor: theme.palette.common.white,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: '100%',
      fontSize: '3em',
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2em',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      fontSize: '2em',
      color: theme.palette.common.white,
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }),
);

const deliveryTime = [
  { label: '1 Week', value: '7' },
  { label: '2 Week', value: '14' },
  { label: '1 Month', value: '30' },
  { label: 'More than a month', value: 'moreThanAMonth' },
];

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

interface ToolbarProps {
  products: any[];
  styles: string[];
  setIsFiltered(isFiltered: any): any;
  setFilteredProducts(filtered: any): any;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Toolbar = (props: ToolbarProps) => {
  const { styles, products, setIsFiltered, setFilteredProducts } = props;
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [filterStyles, setFilterStyles] = useState<string[]>([]);
  const [filterDeliveries, setFilterDeliveries] = useState<any[]>([]);

  useEffect(() => {
    let filtered = products;
    let isFiltered = false;
    if (search) {
      filtered = filtered.filter((p: any) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
      isFiltered = true;
    }
    if (filterStyles.length > 0) {
      filtered = filtered.filter((cp: any) =>
        cp.furniture_style.some((r: string) => filterStyles.includes(r)),
      );
      isFiltered = true;
    }
    if (filterDeliveries.length > 0) {
      filtered = filtered.filter((p: any) => {
        return filterDeliveries.includes(p.dt);
      });
      isFiltered = true;
    }
    setIsFiltered(isFiltered);
    setFilteredProducts(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterDeliveries, filterStyles, search]);

  return (
    <Container maxWidth="md">
      <ElevationScroll>
        <ToolbarMUI className={classes.toolbar}>
          <Grid container direction="row">
            <Grid item xs={6} className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Furniture"
                onChange={(e) => {
                  const { value } = e.target;
                  setSearch(value);
                }}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Grid>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={6}>
                <Autocomplete
                  multiple
                  id="furniture-styles"
                  onChange={(event, value) => {
                    setFilterStyles(value);
                  }}
                  options={styles}
                  autoHighlight
                  disableCloseOnSelect
                  renderOption={(option, { selected }) => (
                    <Grid container justify="space-between">
                      {option}
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                    </Grid>
                  )}
                  className={classes.autocomplete}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Furniture Styles"
                      placeholder="Furniture Styles"
                      fullWidth
                      className={classes.textField}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  multiple
                  id=""
                  options={deliveryTime}
                  onChange={(event, value) => {
                    setFilterDeliveries(value.map((v: any) => v.value));
                  }}
                  disableCloseOnSelect
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(option, { selected }) => (
                    <Grid container justify="space-between">
                      {option.label}
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginLeft: 8 }}
                        checked={selected}
                      />
                    </Grid>
                  )}
                  className={classes.autocomplete}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Delivery Time"
                      placeholder="Delivery Time"
                      fullWidth
                      className={classes.textField}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </ToolbarMUI>
      </ElevationScroll>
      <ToolbarMUI />
    </Container>
  );
};

export default Toolbar;
