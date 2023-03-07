import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, InputLabel } from "@mui/material";
import { selectColor, selectStorage } from "../../const/objects";
import { StyledSelect } from "../../style/styledSelect";

const ProductDetailCard = ({
  product,
  backToList,
  onSubmit,
  register,
  errors,
}) => {
  const { title, image, price, category, description } = product;

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={image} width={"450px"} height={"450px"} alt={title} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          Category: {category}
        </Typography>
        <Typography variant="body2">Price: ${price}</Typography>
        <Typography variant="body2">Description: {description}</Typography>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2} sx={{ marginTop: 4 }}>
            <Grid item container xs={12}>
              <Grid item xs={12} sm={6}>
                <InputLabel>Storage:</InputLabel>
                <StyledSelect {...register("storage", { required: true })}>
                  {selectStorage.map(({ value, label }) => (
                    <option value={value}>{label}</option>
                  ))}
                </StyledSelect>
                <br />
                {errors.storage && <span>This field is required</span>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Color:</InputLabel>
                <StyledSelect {...register("color", { required: true })}>
                  {selectColor.map(({ value, label }) => (
                    <option value={value}>{label}</option>
                  ))}
                </StyledSelect>
                <br />
                {errors.color && <span>This field is required</span>}
              </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" type="submit">
                  Add to Cart
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={backToList}>
                  Back to List
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ProductDetailCard;
