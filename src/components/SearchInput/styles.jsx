export default theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.common.grey,
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.2)',
    borderRadius: '4px',
    display: 'flex',
    flexBasis: '420px',
    paddingBottom: theme.spacing.unit * 0.5,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 0.5
  },
  icon: {
    marginRight: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px'
  }
});
