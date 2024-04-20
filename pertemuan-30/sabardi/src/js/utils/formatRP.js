export const formatRP = (number) => Number(number).toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR"
});