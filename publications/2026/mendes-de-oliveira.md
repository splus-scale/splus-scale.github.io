---
title: "S-PLUS Clusters And Large-scale Environments (SCALE): I. A catalog of known systems in DR5 and a pilot study of Abell 4038"
url: "https://splus-scale.github.io/publications/2026/mendes-de-oliveira"
description: "The Astrophysical Journal (2026)"
---

## Abstract

Within the framework of the Southern Photometric Local Universe Survey (S-PLUS), we introduce **S**\-PLUS **C**lusters **A**nd **L**arge-scale **E**nvironments (SCALE), a project dedicated to the study of galaxy clusters, groups, and their environments using 12-band photometry of S-PLUS combined with spectroscopic and photometric data from the literature. In this first paper, we present a catalog of 83 previously known systems in the redshift range $0.008 \\leq z\_{\\rm spec} \\leq 0.1$, for which we derive $R\_{200}$, $M\_{200}$, and velocity dispersions. Spectroscopic members are selected and matched with S-PLUS photometric redshifts (photo-$z$s). We find excellent agreement between literature spectroscopic redshifts (spec-$z$s) and S-PLUS photometric redshifts (photo-$z$s), demonstrating the potential of the latter for cluster and group membership determination. As a proof of concept, we obtain photometric memberships for Abell 4038 using the Reliable Photometric Membership technique. A two- and three-dimensional analysis of the region within $10 h^{-1}$ Mpc ($10\\times R\_{200}$) from the center of Abell 4038 reveals about a dozen substructures including two additional clusters within $1.3\\times R\_{200}$ (Abell 4038B and Abell 4049). A color–luminosity segregation analysis shows that more luminous (less luminous) galaxies are redder (bluer), as expected. Low-concentration galaxies ($C \\leq 2.5$) exhibit a weaker color–luminosity dependence, compared to higher-concentration ones, indicating mass-dependent evolutionary pathways that challenge a simple morphology–color dichotomy, with low-luminosity galaxies presenting bluer colors largely independent of concentration. The SCALE catalog provides a valuable basis for future studies of large-scale structures and their connection to galaxy evolution.

## Public catalog documentation[#](#public-catalog-documentation)

### Table 1[#](#table-1)

A digital version of Table 1 from the published article is provided to facilitate data analysis. Table 1 presents a summary of the 83 SCALE systems, with each row corresponding to an individual cluster and reporting aggregated cluster properties. The table includes the principal quantities derived in this work, such as $R\_{200}$, $M\_{200}$, and $\\sigma\_{cl}$.

| No. | Unit | Column | Description |
| --- | --- | --- | --- |
| 1 |  | cluster | Name of the cluster/group |
| 2 | deg | ra | Central right ascension of the cluster/group (J2000) |
| 3 | deg | dec | Central declination of the cluster/group (J2000) |
| 4 |  | redshift | Cluster/group redshift |
| 5 | km/s | sigma_cluster | Cluster/group velocity dispersion |
| 6 | Mpc | R200 | Virial radius of the cluster/group |
| 7 | 1014\(M_\odot\) | M200 | Cluster/group mass enclosed within R200 |
| 8 |  | Ntot | Total number of galaxies identified as cluster/group members |
| 9 |  | N200 | Number of cluster/group member galaxies within R200 |
| 10 |  | s | The offset subtracted from the photometric redshifts of cluster members/interlopers (Table 2) to align the photometric-redshift distribution with the spectroscopic-redshift distribution (see Fig. 2) |

### Table 2[#](#table-2)

Table 2 is provided as a digital asset accompanying this work and contains the photometric and spectroscopic measurements, as well as the quantities derived in this study, for each galaxy (cluster member or interloper) associated with the 83 SCALE systems.

| No. | Unit | Column name | Description |
| --- | --- | --- | --- |
| 1 |  | cluster | Cluster or group identifier |
| 2 | deg | ra | Right Ascension (J2000) in decimal degrees |
| 3 | deg | dec | Declination (J2000) in decimal degrees |
| 4 |  | flag_member | Membership flag (0=member, 1=interloper) |
| 5 | km/s | velocity | Velocity derived from spectroscopic redshift |
| 6 | km/s | velocity_err | Velocity error |
| 7 | km/s | velocity_offset | Velocity difference relative to cluster central velocity |
| 8 | deg | dist_proj | Sky projected angular distance between the object and the corresponding cluster center |
| 9 | Mpc | dist | Linear distance between the object and the corresponding cluster center |
| 10 |  | dist_r200 | Linear clustercentric distance to the object normalized by the corresponding cluster's virial radius (R200) |
| 11 |  | sp_prob_gal | S-PLUS DR5 Probability of the object being a galaxy[^nakazono2021] |
| 12 | deg | sp_A | Semi-major axis of the object's light distribution, corresponding to its maximum spatial dispersion |
| 13 | deg | sp_B | Semi-minor axis of the object's light distribution, corresponding to its minimum spatial dispersion |
| 14 | deg | sp_PA | S-PLUS DR5 position angle (counter-clockwise / World-x) |
| 15 |  | sp_ellipticity | Ellipticity (A_IMAGE / B_IMAGE) |
| 16 | deg | sp_radius_petro | S-PLUS DR5 petrosian aperture radius |
| 17 | deg | sp_radius_20 | Radius enclosing 20% of the total flux |
| 18 | deg | sp_radius_50 | Radius enclosing 50% of the total flux |
| 19 | deg | sp_radius_90 | Radius enclosing 90% of the total flux |
| 20 | mag/arcsec2 | sp_mu_max_g | Instrumental peak surface brightness above background in g |
| 21 | mag/arcsec2 | sp_mu_max_r | Instrumental peak surface brightness above background in r |
| 22 |  | sp_background_g | Instrumental background at centroid position in g |
| 23 |  | sp_background_r | Instrumental background at centroid position in r |
| 24 |  | sp_s2n_g_auto | Signal-to-noise ratio of g (auto) |
| 25 |  | sp_s2n_r_auto | Signal-to-noise ratio of r (auto) |
| 26 | mag | sp_mag_u_auto | S-PLUS DR5 magnitude in u band with auto aperture |
| 27 | mag | sp_mag_g_auto | S-PLUS DR5 magnitude in g band with auto aperture |
| 28 | mag | sp_mag_r_auto | S-PLUS DR5 magnitude in r band with auto aperture |
| 29 | mag | sp_mag_i_auto | S-PLUS DR5 magnitude in i band with auto aperture |
| 30 | mag | sp_mag_z_auto | S-PLUS DR5 magnitude in z band with auto aperture |
| 31 | mag | sp_mag_F378_auto | S-PLUS DR5 magnitude in F378 band (Balmer jump / [OII]) with auto aperture |
| 32 | mag | sp_mag_F395_auto | S-PLUS DR5 magnitude in F395 band (Ca H + K) with auto aperture |
| 33 | mag | sp_mag_F410_auto | S-PLUS DR5 magnitude in F410 band (H\(\delta\)) with auto aperture |
| 34 | mag | sp_mag_F430_auto | S-PLUS DR5 magnitude in F430 band (G band) with auto aperture |
| 35 | mag | sp_mag_F515_auto | S-PLUS DR5 magnitude in F515 band (Mg b triplet) with auto aperture |
| 36 | mag | sp_mag_F660_auto | S-PLUS DR5 magnitude in F660 band (H\(\alpha\)) with auto aperture |
| 37 | mag | sp_mag_F861_auto | S-PLUS DR5 magnitude in F861 band (Ca triplet) with auto aperture |
| 38–49 | mag | sp_mag_[band]_PStotal | S-PLUS DR5 magnitude in [band] band with PStotal aperture; [band] is one of: u, g, r, i, z, F378, F395, F410, F430, F515, F660, F861 |
| 50–61 | mag | sp_mag_[band]_aper_6 | S-PLUS DR5 magnitude in [band] band with 6'' aperture; [band] is one of: u, g, r, i, z, F378, F395, F410, F430, F515, F660, F861 |
| 62–73 | mag | sp_mag_err_[band]_auto | S-PLUS DR5 magnitude error in [band] band with auto aperture; [band] is one of: u, g, r, i, z, F378, F395, F410, F430, F515, F660, F861 |
| 74–85 | mag | sp_mag_err_[band]_PStotal | S-PLUS DR5 magnitude error in [band] band with PStotal aperture; [band] is one of: u, g, r, i, z, F378, F395, F410, F430, F515, F660, F861 |
| 86–97 | mag | sp_mag_err_[band]_aper_6 | S-PLUS DR5 magnitude error in [band] band with 6'' aperture; [band] is one of: u, g, r, i, z, F378, F395, F410, F430, F515, F660, F861 |
| 98–101 | mag | sp_mag_g_[type] | S-PLUS DR5 magnitude in g band for [type] aperture; [type] is one of: aper_3, res, iso, petro |
| 102–105 | mag | sp_mag_r_[type] | S-PLUS DR5 magnitude in r band for [type] aperture; [type] is one of: aper_3, res, iso, petro |
| 106 |  | sp_field | Survey field identifier |
| 107 |  | sp_photoz | S-PLUS DR5 single-point photometric redshift estimate[^erik-redshifts] |
| 108 |  | sp_photoz_odds | Area of PDF within 0.02 of the PDF peak (photo-z odds) |
| 109–111 |  | sp_photoz_pdf_weights_[i] | Weights of the gaussian components of the photometric-redshift PDF mixture, where [i] is one of 0, 1, 2 |
| 112–114 |  | sp_photoz_pdf_means_[i] | Means of the gaussian components of the photometric-redshift PDF mixture, where [i] is one of 0, 1, 2 |
| 115–117 |  | sp_photoz_pdf_stds_[i] | Standard deviations of the gaussian components of the photometric-redshift PDF mixture, where [i] is one of 0, 1, 2 |
| 118 |  | sp_in_overlap_region | Flag indicating object lies in overlap region (bool/int) |
| 119–126 | mag | ls_mag_[band] | Legacy Survey DR10 magnitudes where [band] is one of: g, r, i, z, w1, w2, w3, w4 |
| 127 |  | ls_type | Legacy Survey DR10 morphological type |
| 128 | arcsec | ls_shape_r | Legacy Survey effective radius (arcsec) |
| 129 |  | lit_redshift | Spectroscopic redshift[^erik-redshifts] |
| 130 |  | lit_redshift_err | Spectroscopic redshift error |
| 131 |  | lit_class_spec | Spectroscopic classification |
| 132 |  | lit_original_class_spec | Original spectroscopic classification before grouping |
| 133 |  | lit_source | Catalogue/source of the spectroscopic redshift |
| 134 |  | lit_redshift_flag | Flag indicating spectroscopic redshift quality |

## Data

Table 1

CSVtable\_1.csv[Download](https://github.com/splus-scale/data/releases/download/v1/table_1.csv)

eCSVtable\_1.ecsv[Download](https://github.com/splus-scale/data/releases/download/v1/table_1.ecsv)

Parquettable\_1.parquet[Download](https://github.com/splus-scale/data/releases/download/v1/table_1.parquet)

FITStable\_1.fits[Download](https://github.com/splus-scale/data/releases/download/v1/table_1.fits)

VOTabletable\_1.xml[Download](https://github.com/splus-scale/data/releases/download/v1/table_1.xml)

MRTtable\_1.mrt[Download](https://github.com/splus-scale/data/releases/download/v1/table_1.mrt)

Table 2

CSVtable\_2.csv[Download](https://github.com/splus-scale/data/releases/download/v1/table_2.csv)

eCSVtable\_2.ecsv[Download](https://github.com/splus-scale/data/releases/download/v1/table_2.ecsv)

Parquettable\_2.parquet[Download](https://github.com/splus-scale/data/releases/download/v1/table_2.parquet)

FITStable\_2.fits[Download](https://github.com/splus-scale/data/releases/download/v1/table_2.fits)

VOTabletable\_2.xml[Download](https://github.com/splus-scale/data/releases/download/v1/table_2.xml)

MRTtable\_2.mrt[Download](https://github.com/splus-scale/data/releases/download/v1/table_2.mrt)

## Citation

reference.bib

CopyDownload

@article{Mendes\_de\_Oliveira\_2026,
  author    = {Mendes de Oliveira, C. and Cardoso, N. M. and Lopes, P. A. A. and Ribeiro, A. L. B. and Olave-Rojas, D. E. and Krabbe, A. and Sodré, L. and Demarco, R. and Smith Castelli, A. V. and Cid Fernandes, R. and Herpich, F. R. and Torres-Flores, S. and Carrasco, E. R. and Lima, E. V. R. and Oliveira Schwarz, G. and Costa, A. P. and Doubrawa, L. and Montaguth, G. P. and Lima-Dias, C. and Cypriano, E. S. and Carvalho, M. S. and Lobo, C. and Fonseca-Faria, M. and Nakazono, L. and Lopes, A. R. and Almeida-Fernandes, F. and Kanaan, A. and Ribeiro, T. and Schoenell, W.},
  doi       = {10.3847/1538-4357/ae84d0},
  issn      = {1538-4357},
  journal   = {The Astrophysical Journal},
  month     = {August},
  number    = {2},
  pages     = {202},
  publisher = {American Astronomical Society},
  title     = {S-PLUS Clusters And Large-scale Environments (SCALE). I. A Catalog of Known Clusters and Groups in DR5 and a Pilot Study of Abell 4038},
  url       = {http://dx.doi.org/10.3847/1538-4357/ae84d0},
  volume    = {1007},
  year      = {2026}
}

* * *

* * *

[

![Cover of Astronomy & Astrophysics](/_astro/aa.D5LgeuQl_ZmOlDw.webp)

Research article

### S-PLUS Clusters And Large-scale Environments (SCALE): II. PZWav versus redMaPPer identification of eRosita groups

_A&A_ (2026)



](/publications/2026/doubrawa/)

[

![Cover of Astronomy & Astrophysics](/_astro/aa.D5LgeuQl_ZmOlDw.webp)

Research article

### SCALE: Using S-PLUS photometric information to analyse the brightest cluster galaxy alignment with satellite galaxies

_A&A_ (2025)



](/publications/2025/doubrawa/)