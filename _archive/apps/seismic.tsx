import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ReactPlayer from 'react-player/vimeo';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Mining Induced Seismicity</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Mining Induced Seismicity`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <>
          This suite of apps provides tools for the analysis and interpretation
          of mining induced seismicity and the management of seismic hazard.
          <p />
          <Heading as="h2">General Analysis App</Heading>
          The General Analysis App provides tools for the general analysis of
          mine induced seismicity. These tools include combinations of complex
          spatial and range filters, charts, tables and 3D views.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/440182256"
          />
          <p />
          <b>Principal author</b>: Johan Wesseloo
          <b>Other contributors</b>: Paul Harris, Dan Cumming-Potvin, Kyle
          Woodward, Gerhard Morkel, Wei Duan, Stuart Tierney Wesseloo, J,
          Harris, PC, Cumming-Potvin, D, Woodward, KR, Morkel, IG, Duan, W &
          Tierney, ST 2015, _mXrap software app, Mining Induced Seismicity -
          General Analysis_, version 1, Australian Centre for Geomechanics,
          Perth, <Link to="https://mxrap.com/">mxrap.com</Link>
          <Heading as="h2">Grid Based Analysis</Heading>
          The Grid Based Analysis app provides the tools to evaluate the spatial
          distribution of seismic source parameters. Based on specified input
          parameters, a three-dimensional spatial kernel interpolation is
          performed to assess the mean value of seismic source parameters on a
          given grid. Cumulative source parameters like cumulative apparent
          volume are assessed through a variable bandwidth kernel interpolation
          of which the bandwidth is a function of the source size. The b-value
          is evaluated by implementing a robust algorithm for finding the
          magnitude of completeness and b-value pair for each grid
          point.Post-processing includes the three-dimensional display of
          results using colour, transparency, and gridpoint scaling. Filtering
          of gridpoints and the events contained in the volumes represented by
          the gridpoints can be performed. This grid based event filter can also
          be used for general analysis.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/440182276"
          />
          Further reading: Wesseloo, J 2014, Evaluation of the spatial variation
          of the b-value, _Journal of the Southern African Institute of Mining
          and Metallurgy_. Wesseloo, J, Woodward, KR & Pereira, J 2014,
          Grid-based analysis of seismic data, _Journal of the Southern African
          Institute of Mining and Metallurgy_.
          <p />
          <b>Principal authors</b>: Johan Wesseloo and Paul Harris Wesseloo, J &
          Harris, PC 2015, _mXrap software app, Mining Induced Seismicity - Grid
          Based Analysis_, version 1, Australian Centre for Geomechanics,
          Perth,[www.mXrap.com](https://www.mrap.com)
          <Heading as="h2">Plane Fitting App</Heading>
          The Plane Fitting App provides a tool for fitting a plane through
          selected seismic events. The app performs principal component analysis
          (PCA) on the spatial data provided and generates a plane normal to the
          minor axis with the extent determined by the major and intermediate
          axis. A stereonet is provided showing the pole of the plane from the
          PCA. Planes are also fitted through three-event combinations of the
          selected events. The pole distribution of these planes is shown as
          contours on the stereonet. A goodness of fit analysis is performed and
          a simplified ranking assigned to the best-fit plane. The plane can be
          exported as a _\*.pnt_ file for later re-use in a 'distance to' filter
          or for display in other apps and programs.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/440182325"
          />
          <p />
          <b>Principal authors</b>: Dan Cumming-Potvin, Kyle Woodward
          <b>Other contributors</b>: Paul Harris, Johan Wesseloo Cumming-Potvin,
          D, Woodward, KR, Harris, PC & Wesseloo, J 2015, _mXrap software app,
          Mining Induced Seismicity - Plane Fitting_, version 1, Australian
          Centre for Geomechanics, Perth, [www.mXrap.com](https://www.mxrap.com)
          <Heading as="h2">Hazard Assessment</Heading>
          The grid-based seismic hazard assessment app assesses the current
          seismic hazard for the mine based on the recent seismic history. An
          assessment of a mine-wide value for Mmax is performed based on the
          work presented by Kijko & Singh (2011) and Lasocki & Urban (2011). The
          spatial distribution of b-value and event density for the recent
          history is performed and used as input to a probabilistic evaluation
          of the spatial distribution of the seismic hazard. The results of this
          probabilistic calculation are presented in space in several ways
          through iso surfaces and pseudo-volumetric rendering. The
          probabilistic distribution of the peak-particle velocity is calculated
          for minodes and seismic hazard map in terms of the probabilistic
          evaluation of the strong ground motion being produced. The minodes can
          be interrogated and the contribution of different sources evaluated.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/440182294"
          />
          Further reading: Wesseloo, J 2018, ‘The spatial assessment of the
          current seismic hazard state for hard rock underground mines', _Rock
          Mechanics and Rock Engineering_. Wesseloo, J 2014, ‘Evaluation of the
          spatial variation of the b-value', _Journal of the Southern African
          Institute of Mining and Metallurgy_, vol. 114, pp. 823-828. Wesseloo,
          J, Woodward, K & Pereira, J 2014, ‘Grid-based analysis of seismic
          data', _Journal of the Southern African Institute of Mining and
          Metallurgy_, vol. 114, pp. 815-822.
          <p />
          <b>Principal authors</b>: Johan Wesseloo, Paul Harris
          <b>Other contributors</b>: Gerhard Morkel Wesseloo, J, Harris, PC &
          Morkel, IG 2015, _mXrap software app, Mining Induced Seismicity - Grid
          Based Hazard Assessment App_, version 1, Australian Centre for
          Geomechanics, Perth, <Link to="https://mxrap.com/">mxrap.com</Link>
          Seismic-Production Balance
          <Heading as="h2">Seismic-Production Balance</Heading>
          The Seismic-Production Balance app focuses on investigating the link
          between seismicity and production, specifically the balance between
          the two. Adjustment of certain seismic parameters enables the user to
          view the Energy Balance chart and view the influence of increasing
          production volume on the energy in the system. In addition to Potency
          charts, the app also includes some other parameters plotted as a
          function of production volume for further analysis. These parameters
          include cumulative number of events versus production volume,
          displacement versus production volume, and potency versus production
          volume.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/440182347"
          />
          <p />
          <b>Principal author</b>: Gerhard Morkel Morkel IG 2016, _mXrap
          software app, Mining Induced Seismicity - Seismic-Production Balance
          app_, version 1. Australian Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
          Rockburst Damage Potential
          <Heading as="h2">Rockburst Damage Potential</Heading>
          This app is based on the Rockburst Damage Potential (RDP) system
          developed by Dan Heal (2010). This app provides an environment to edit
          the E1, E2, E3 and E4 components of the RDP system as well as to
          display and interrogate these components, the excavation vulnerability
          potential (EVP), the PPV factor and the RDP.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/775660295?h=42a7031c59"
          />
          Further reading: Heal, D, Hudyma, M & Potvin, Y 2006, ‘Evaluating
          rockburst damage potential in underground mining', _Golden Rocks 2006,
          The 41st US Symposium on Rock Mechanics (USRMS),_ American Rock
          Mechanics Association, Alexandria.
          <p />
          <b>Principal authors</b>: Dan Cumming-Potvin
          <b>Other contributors</b>: Johan Wesseloo, Paul Harris, Gerhard Morkel
          Niedzielski, L., Cumming-Potvin, D. (2022) mXrap software app, Caving
          Sandbox. Perth, Western Australia: The Australian Centre for
          Geomechanics, The University of Western Australia.
          [mXrap.com](https://www.mrap.com) Large Event Analysis
          <Heading as="h2">Large Event Analysis</Heading>
          The Large Event Analysis app provides the user with an easy and quick
          first assessment of the distribution of strong ground motion at
          excavations for a given event. Plots are given for a uniform and a
          double couple shear mechanism. Users can choose events from the
          database performing ‘what-if' analyses by overriding some or all the
          parameters. The app is limited to a linear distance analysis using a
          given strong ground motion relationship and does not take into account
          any wave-medium and wave-excavation interaction.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/440182311"
          />
          <p />
          <b>Principal author</b>: Wei Duan
          <b>Other contributors</b>: Johan Wesseloo, Paul Harris Duan, W,
          Wesseloo, J & Harris, PC 2015, _mXrap software app, Mining Induced
          Seismicity - Large Event Analysis_, version 1, Australian Centre for
          Geomechanics, Perth, <Link to="https://mxrap.com/">mxrap.com</Link>
          <Heading as="h2">Omori Analysis Tools</Heading>
          The Omori Analysis app provides several windows each dedicated to
          specific tasks. The window provides the ability to select a blast or
          blasts from the blast database for which the ‘Omori chart' is provided
          for the events within a specified volume around the blast/s and a
          specified time after the blast/s. If more than one blast is selected,
          the individual and the stacked cumulative event distribution are
          provided. Another window is dedicated to performing a best-fit of the
          Modified Omori Law (MOL) to the events associated with a selected
          blast. The chosen volume and time window and the parameters for the
          MOL are saved. Another window dedicated to the analysis of these
          results is provided. The statistical and spatial distributions of the
          MOL parameters are assessed based on the saved parameters from the MOL
          best-fit. The spatial and statistical distributions of the MOL
          parameters provide input to the re-entry analysis which is provided in
          another window. The re-entry assessment is based on the work by
          Vallejos & McKinnon (2010) and can be used in real time assessment of
          re-entry or for the back analysis of historical data to develop
          re-entry protocols.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/466469554"
          />
          Further reading: Vallejos, JA & McKinnon, SD 2010, ‘Temporal evolution
          of aftershock sequences for re-entry protocol development in
          seismically active mines', in JM Van Sint & Y Potvin (eds),
          _Proceedings of the 5th International Seminar on Deep and High Stress
          Mining_, Australian Centre for Geomechanics, Perth, pp. 199-214.
          Morkel, IG & Rossi-Rivera, P 2017, ‘The implementation and
          quantification of the Vallejos and McKinnon re-entry methodology',
          _Proceedings of the Eighth International Conference on Deep and High
          Stress Mining_, Australian Centre for Geomechanics, Perth,
          [https://papers.acg.uwa.edu.au/p/1704_10_Morkel/](https://papers.acg.uwa.edu.au/p/1704_10_Morkel/)
          Tierney, S & Morkel, IG 2017, ‘The optimisation and comparison of
          re-entry assessment methodologies for use in seismically active
          mines', _Proceedings of the Eighth International Conference on Deep
          and High Stress Mining_, Australian Centre for Geomechanics, Perth,
          [https://papers.acg.uwa.edu.au/p/1704_11_Tierney/](https://papers.acg.uwa.edu.au/p/1704_11_Tierney/)
          <p />
          <b>Principal authors</b>: Kyle Woodward, Gerhard Morkel
          <b>Other contributors</b>: Johan Wesseloo, Stuart Tierney Woodward,
          KR, Morkel IG, Wesseloo, J & Tierney, ST 2017, _mXrap software app,
          Mining Induced Seismicity - Omori Analysis Tools_, version 1,
          Australian Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
          <Heading as="h2">Seismic Event Quality</Heading>
          The Seismic Event Quality app provides tools to evaluate the quality
          of the database and highlight potential bad quality data. Noise,
          blasts, and bad quality data can be tagged and excluded from analysis
          in other apps. The Seismic Event Quality app includes potential blast
          detection, spatial filters and outlier detection.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/466470695"
          />
          Further reading: Morkel, IG & Wesseloo, J 2017, ‘A technique to
          determine systematic shifts in microseismic databases', _Proceedings
          of the Eighth International Conference on Deep and High Stress
          Mining_, Australian Centre for Geomechanics, Perth,
          [https://papers.acg.uwa.edu.au/p/1704_05_Morkel/](https://papers.acg.uwa.edu.au/p/1704_05_Morkel/)
          Morkel, IG & Wesseloo, J 2017, ‘The effect of sensor frequency range
          on the estimation of the current hazard state', in JA Vallejos (ed.),
          _Proceedings of the 9th International Symposium on Rockbursts and
          Seismicity in Mines_, Universidad de Chile, Santiago. Morkel, IG,
          Wesseloo, J & Harris, PC 2015, ‘Highlighting and quantifying seismic
          data quality concerns', in PM Dight (ed.), _Proceedings of the Ninth
          International Symposium on Field Measurements in Geomechanics_,
          Australian Centre for Geomechanics, Perth, pp. 215-222.
          <p />
          <b>Principal authors</b>: Gerhard Morkel, Johan Wesseloo
          <b>Other contributors</b>: Paul Harris Morkel, IG & Wesseloo J 2015,
          _mXrap software app, Mining Induced Seismicity - Seismic Event
          Quality_, version 1, Australian Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
          System Design
          <Heading as="h2">System Design</Heading>
          The System Design app provides tools to assess the seismic system
          sensitivity in 3D space. The app uses the seismic database and sensor
          file for a chosen stable period to derive the Dx-mmin relationship.
          Where Dx is the distance to the Xth sensor, typically X = 5 mmin is
          the system sensitivity. This relationship is then used to plot the
          system sensitivity in 3D space for a given array of seismic sensors. A
          general indication of the location quality for different magnitudes is
          also provided based on given sensor arrays. The effect of losing or
          adding sensors in the array can be evaluated interactively. Although
          further development was done since the publication of the following
          paper, it still provides a summary of the concepts used in this app:
          Wesseloo, J. (2011) Empirical methods for assessment of seismic system
          sensitivity, Transactions of the Institutions of Mining and
          Metallurgy: Section A, Mining Technology, vol. 120 (2), pp. 105-111.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/775661263"
          />
          <p />
          <b>Principal authors</b>: Johan Wesseloo
          <b>Other contributors</b>: Kyle Woodward, Wei Duan, Paul Harris
          Wesseloo, J, Woodward, KR, Duan, W & Harris, PC 2015, _mXrap software
          app, Mining Induced Seismicity - System Design_, version 1, Australian
          Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
          <Heading as="h2">Seismic Monitoring</Heading>
          The use of the Basic Seismic Monitoring app is intended for mine
          control room operators to monitor the latest seismicity and
          communicate event alerts and exclusion areas depending on
          site-specific rules. Each site can set up their own event alert and
          exclusion settings in the Basic Seismic Monitoring (Admin) application
          and then the main application is a simplified interface for the
          viewer. Key features include: - Automatic events updating (no need to
          keep pressing ‘Reload Data'!). - Popup event alert notifications (to
          alert user when window is hidden/minimised). - Popup system alert
          notifications (triggered from threshold time without new events). -
          Plot exclusion areas and isolate single mine areas (e.g. single level
          plans). - Automatic view - quick zoom/rotate to the exclusion areas on
          screen. - Distance measurement - get the distance from any survey
          point to the nearest event alert.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/775661765"
          />
          <p />
          <b>Principal author</b>: Stuart Tierney
          <b>Contributing authors</b>: Paul Harris, Dan Cumming-Potvin Tierney,
          SR 2017, _mXrap software app, Basic Seismic Monitoring_, The
          Australian Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
          Short Term Response Analysis
          <Heading as="h2">Short Term Response Analysis</Heading>
          The Short Term Response Analysis app allows users to visualise the
          seismic response to different triggers (blasts and large seismic
          events). They analyse the temporal response to assess re-entry times
          and the spatial response to assess exclusion zones. There are also
          tools for evaluating the response based on different trigger types
          (date, blast type, blast size, etc) - which can help the user better
          understand the nature of their seismic responses.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/440182368"
          />
          <p />
          <b>Principal author</b>: Stuart Tierney
          <b>Other contributors</b>: Dan Cumming-Potvin, Kyle Woodward, Gerhard
          Morkel Tierney, ST 2018, _mXrap software app, Mining Induced
          Seismicity - Event Density Isosurfaces_, version 1, Australian Centre
          for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
          Event Density ISOs
          <Heading as="h2">Event Density ISOs</Heading>
          The Event Density Isosurfaces app allows users to create isosurfaces
          for different levels of event density. This is a powerful analysis
          tool, giving users better information about seismic activity rates
          when the event counts are high (due to high seismic activity and/or
          sensitive sensor arrays).
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/video/440182216"
          />
          <p />
          <b>Principal authors</b>: Johan Wesseloo, Matthew Heinsen Egan
          <b>Other contributors</b>: Dan Cumming-Potvin, Stuart Tierney, Paul
          Harris Wesseloo, J & Heinsen Egan, M 2018, _mXrap software app, Mining
          Induced Seismicity - Event Density Isosurfaces_, version 1, Australian
          Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
        </>
      </main>
    </Layout>
  );
}
