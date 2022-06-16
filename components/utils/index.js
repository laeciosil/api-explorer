export function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}
