import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { selectColor, selectStorage } from "../../const/objects";

const ProductDetailCard = ({
  product,
  backToList,
  onSubmit,
  errors,
  isLoaddingPostProduct,
  setValue,
  watch,
  register,
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
          height: "500px",
          overflow: "hidden",
        }}
      >
        <img src={image} height={"100%"} alt={title} />
      </Grid>

      <Grid xs={12} item sm={6} sx={{ padding: "15px" }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          Category: {category}
        </Typography>
        <Typography variant="h6">Price: ${price}</Typography>
        <Typography variant="body2">{description}</Typography>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2} sx={{ marginTop: 4 }}>
            <Grid item container xs={12}>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="storage-label">Storage</InputLabel>
                <Select
                  {...register("storage", { required: true })}
                  labelId="storage-label"
                  id="demo-simple-select-autowidth"
                  label="Storage"
                  sx={{ minWidth: 150 }}
                  value={watch("storage")}
                  onChange={(a) => {
                    setValue("storage", a.target.value);
                  }}
                >
                  {selectStorage.map(({ id, label }) => (
                    <MenuItem value={id}>{label}</MenuItem>
                  ))}
                </Select>
                {errors.storage && (
                  <FormHelperText>This field is required</FormHelperText>
                )}
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="color-label">Color</InputLabel>
                <Select
                  {...register("color", { required: true })}
                  labelId="color-label"
                  id="demo-simple-select-autowidth"
                  label="Color"
                  sx={{ minWidth: 150 }}
                  value={watch("color")}
                  onChange={(a) => {
                    setValue("color", a.target.value);
                  }}
                >
                  {selectColor.map(({ id, label }) => (
                    <MenuItem value={id}>{label}</MenuItem>
                  ))}
                </Select>
                {errors.color && (
                  <FormHelperText>This field is required</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <LoadingButton
                  variant="outlined"
                  type="submit"
                  loading={isLoaddingPostProduct}
                >
                  Add to Cart
                </LoadingButton>
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
