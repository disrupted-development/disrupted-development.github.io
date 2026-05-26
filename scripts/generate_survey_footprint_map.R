library(dplyr)
library(ggplot2)
library(rnaturalearth)
library(sf)

output_file <- file.path("images", "survey-footprint-slide.png")
country_file <- file.path("data", "responded_countries_clean.csv")

responded_countries <- read.csv(country_file, stringsAsFactors = FALSE) |>
  filter(include_on_map == TRUE, !is.na(iso3), iso3 != "")

responded_iso3 <- sort(unique(responded_countries$iso3))

world <- ne_countries(scale = "medium", returnclass = "sf") |>
  filter(adm0_a3 != "ATA") |>
  mutate(
    country_key = if_else(!is.na(iso_a3) & iso_a3 != "-99", iso_a3, adm0_a3),
    response_status = if_else(
      country_key %in% responded_iso3,
      "Responded countries",
      "Other countries"
    ),
    response_status = factor(
      response_status,
      levels = c("Other countries", "Responded countries")
    )
  )

missing_iso3 <- setdiff(responded_iso3, world$country_key)
if (length(missing_iso3) > 0) {
  stop("Countries not found in Natural Earth data: ", paste(missing_iso3, collapse = ", "))
}

country_count <- length(responded_iso3)
count_floor <- floor(country_count / 5) * 5

map_plot <- ggplot() +
  annotate("rect", xmin = -180, xmax = 180, ymin = -58, ymax = 85, fill = "#fbfaf6") +
  geom_sf(
    data = world,
    aes(fill = response_status),
    color = "#d8c9a7",
    linewidth = 0.22
  ) +
  annotate(
    "text",
    x = -180,
    y = 103,
    label = "Survey footprint based on respondent locations",
    hjust = 0,
    family = "sans",
    fontface = "bold",
    size = 11.2,
    color = "#2d2926"
  ) +
  annotate(
    "text",
    x = -180,
    y = 94,
    label = paste0("Join more than ", count_floor, " countries that have already answered the survey"),
    hjust = 0,
    family = "sans",
    size = 6.6,
    color = "#5f5954"
  ) +
  scale_fill_manual(
    values = c(
      "Other countries" = "#e9ddbd",
      "Responded countries" = "#a50026"
    )
  ) +
  coord_sf(
    xlim = c(-180, 180),
    ylim = c(-72, 110),
    expand = FALSE,
    default_crs = sf::st_crs(4326)
  ) +
  guides(fill = guide_legend(override.aes = list(color = NA))) +
  theme_void(base_family = "sans") +
  theme(
    plot.background = element_rect(fill = "#f5eedf", color = NA),
    panel.background = element_rect(fill = "#f5eedf", color = NA),
    plot.margin = margin(45, 50, 45, 50),
    legend.position = "inside",
    legend.position.inside = c(0.84, 0.20),
    legend.justification = c(0.5, 0.5),
    legend.title = element_blank(),
    legend.text = element_text(size = 18, color = "#111111"),
    legend.background = element_rect(fill = "#fbfaf6", color = "#d8c9a7", linewidth = 1.2),
    legend.key = element_rect(fill = "#fbfaf6", color = NA),
    legend.key.size = unit(1.8, "lines"),
    legend.box.margin = margin(10, 14, 10, 14)
  )

ragg::agg_png(
  filename = output_file,
  width = 2430,
  height = 1368,
  units = "px",
  res = 150,
  background = "#f5eedf"
)
print(map_plot)
dev.off()

cat("Country input:", country_file, "\n")
cat("Responded countries:", paste(sort(responded_countries$country_name), collapse = ", "), "\n")
cat("Responded country count:", country_count, "\n")
cat("Map written to:", output_file, "\n")
