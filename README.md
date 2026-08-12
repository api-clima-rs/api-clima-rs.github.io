# api-meu-rs.github.io

![Visitors](https://api.visitorbadge.io/api/visitors?path=https://github.com/api-meu-rs/api-meu-rs.github.io&countColor=%232ea44f)

API de leitura para agregacao de outras apis publicas com dados abertos, foco em clima

- CLIMA-RS
- SIMAGRO
- ANA
- IBGE
- OVERPASS
- OPENMETEO
- OPENSTREETMAP
- OPENTOPODATA
- OBIS
- NASA
- PURPLEAIR
- RELIEF
- SUNRISE-SUNSET
- INPE
- GLOBALFLOODSDB
- INATURALIST
- USGS
- OPEN-ELEVATION
- GBIF


DOC:
```bash
https://api-clima-rs.github.io
```

Exemplo GET:
```bash
https://api-clima-rs.github.io/pages/index.html?city=Porto Alegre
```

Exemplo Response:
```json 
{
  "cid": "2a47c6db-4b90-4d16-87b6-bd82bc26ec2b",
  "atr_ibge_nome_cidade": "Porto Alegre",
  "atr_ibge_nome_oficial_cidade": "Porto Alegre",
  "atr_openstreetmap_nome_cidade": "Porto Alegre",
  "atr_ibge_codigo_cidade": "4314902",
  "atr_cidade_lat": "-30.03283",
  "atr_cidade_lon": "-51.23019",
  "url_ibge_cidade": "https://www.ibge.gov.br/cidades-e-estados?c=4314902",
  "url_clima_rs_v1_ana_cotas": "https://clima.rs.gov.br/climars/api/v1/ana/cotas/municipio/4314902?limite=5",
  "url_simagro_current": "https://clima.rs.gov.br/climars/api/v1/simagro/current/($codigo)",
  "url_clima_rs_v1_simagro_forecast": "https://clima.rs.gov.br/climars/api/v1/simagro/forecast/4314902",
  "url_simagro_forecast_detailed": "https://clima.rs.gov.br/climars/api/v1/simagro/forecast/4314902/detailed",
  "url_openstreetmap_v1_nominatim": "https://nominatim.openstreetmap.org/search?q=Porto Alegre,RS,Brasil&format=json&limit=1",
  "url_noise_omi": "https://noise-omi.org/api/noise?lat=-30.03283&lon=-51.23019",
  "url_overpass_hospitais_10km": "https://overpass-api.de/api/interpreter?data=[out:json];node[\"amenity\"=\"hospital\"](around:10000,-30.03283,-51.23019);out 10;",
  "url_overpass_farmacias_10km": "https://overpass-api.de/api/interpreter?data=[out:json];node[\"amenity\"=\"pharmacy\"](around:10000,-30.03283,-51.23019);out 10;",
  "url_overpass_trafego": "https://overpass-api.de/api/interpreter?data=[out:json];node[\"amenity\"=\"traffic_signals\"](around:5000,-30.03283,-51.23019);out 50;",
  "url_overpass_lixo": "https://overpass-api.de/api/interpreter?data=[out:json];node[\"amenity\"=\"recycling\"](around:10000,-30.03283,-51.23019);out 20;",
  "url_openmeteo_clima_atual": "https://api.open-meteo.com/v1/forecast?latitude=-30.03283&longitude=-51.23019¤t=temperature_2m,relative_humidity_2m,apparent_temperature,rain,wind_speed_10m,wind_direction_10m,uv_index&hourly=precipitation_probability&timezone=America%2FSao_Paulo&forecast_days=1",
  "url_openmeteo_previsao_7d": "https://api.open-meteo.com/v1/forecast?latitude=-30.03283&longitude=-51.23019&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=America%2FSao_Paulo",
  "url_openmeteo_qualidade_ar": "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-30.03283&longitude=-51.23019¤t=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,ozone,european_aqi",
  "url_openmeteo_solo": "https://api.open-meteo.com/v1/forecast?latitude=-30.03283&longitude=-51.23019¤t=soil_temperature_0cm,soil_moisture_0_1cm&timezone=America%2FSao_Paulo",
  "url_openmeteo_radiacao": "https://api.open-meteo.com/v1/forecast?latitude=-30.03283&longitude=-51.23019¤t=shortwave_radiation,direct_radiation&hourly=global_tilted_irradiance&timezone=America%2FSao_Paulo&forecast_days=1",
  "url_openmeteo_agro": "https://api.open-meteo.com/v1/forecast?latitude=-30.03283&longitude=-51.23019&daily=et0_fao_evapotranspiration&timezone=America%2FSao_Paulo",
  "url_openmeteo_solar": "https://api.open-meteo.com/v1/forecast?latitude=-30.03283&longitude=-51.23019&hourly=global_tilted_irradiance&timezone=America%2FSao_Paulo",
  "url_openmeteo_marine": "https://marine-api.open-meteo.com/v1/marine?latitude=-30.03283&longitude=-51.23019¤t=wave_height",
  "url_opentopodata": "https://api.opentopodata.org/v1/srtm90m?locations=-30.03283,-51.23019",
  "url_obis_marinha": "https://api.obis.org/v3/occurrence?scientificname=&geometry=POINT(-51.23019%20-30.03283)",
  "url_nasa_eonet": "https://eonet.gsfc.nasa.gov/api/v3/events?status=open&bbox=-51.23019,-30.03283,-51.23019,-30.03283",
  "url_purpleair": "https://api.purpleair.com/v1/sensors?fields=name,pm2.5&nwlng=-51.23019&selng=-51.23019&nwat_lat=-30.03283&seat_lat=-30.03283",
  "url_reliefweb": "https://api.reliefweb.int/v1/disasters?appname=metaai&filter[location][lat]=-30.03283&filter[location][lon]=-51.23019&filter[location][radius]=100",
  "url_sunrise_sunset": "https://api.sunrise-sunset.org/json?lat=-30.03283&lng=-51.23019&formatted=0",
  "url_ana_hidro": "https://www.snirh.gov.br/hidroweb/estacoes?municipio=Porto Alegre",
  "url_cptec_inpe_queimadas": "https://queimadas.dgi.inpe.br/api/focos?data=ontem&estado=RS&municipio=Porto Alegre",
  "url_global_flood_db": "https://globalfloods.jrc.ec.europa.eu/apps/gf4s/?lon=-51.23019&lat=-30.03283",
  "url_inaturalist": "https://api.inaturalist.org/v1/observations?nelat=-30.03283&nelng=-51.23019&swlat=-30.03283&swlng=-51.23019",
  "url_usgs_terremotos_300km": "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=-30.03283&longitude=-51.23019&maxradiuskm=300",
  "url_open_elevation": "https://api.open-elevation.com/api/v1/lookup?locations=-30.03283,-51.23019",
  "url_gbif_biodiversidade": "https://api.gbif.org/v1/occurrence/search?decimalLatitude=-30.03283&decimalLongitude=-51.23019&radius=100000",
  "url_ibge_bdg": "https://servicodados.ibge.gov.br/api/v1/bdg/municipio/4314902/estacoes",
  "url_ibge_loc": "https://servicodados.ibge.gov.br/api/v1/localidades/municipios/4314902",
  "url_ibge_bng": "https://servicodados.ibge.gov.br/api/v1/bngb/municipio/4314902/nomesgeograficos"
}
```