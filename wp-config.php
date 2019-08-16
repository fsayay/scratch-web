<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cursoScratch' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'daH&[+m?#uwl:}P!AX@ksa,X4.5LkZC|g5^j8@2/!&A{0ysNjC:y?WOb&iN|-{s8' );
define( 'SECURE_AUTH_KEY',  'jVdc>$)(PlCrLke=%zi-&CsfrQbI)mCsjP;zX0w!*sN!t9p~YkoCNS?AdQc98GC.' );
define( 'LOGGED_IN_KEY',    '4OY*|`g_/4NuA5LCN<p`.h*h>N5BkqZ?R]wVBFvPs~.8Q,rdJ@s,V6;!zV9(B[S/' );
define( 'NONCE_KEY',        'b}-/IM%$~V{TJ17Ln_1k3zB%OENSVn5 w:,@-8:DF/Jhzin~5_WEEVa|;[l+8<sw' );
define( 'AUTH_SALT',        '`jJ6i}QwM>ar4FC^n|[4Q8|YMc~I1g=qt/Hkv2G@Hhe0t*^:sgk>)_2mfW$Tb9R2' );
define( 'SECURE_AUTH_SALT', 'q7d~@kEB!.)0&R,ai|qDPae.Me~[>voKrU|t*Pf*~GD#fFKPfHVMxH!]iQhq+7x3' );
define( 'LOGGED_IN_SALT',   '3%Wd9?p19i,%CL?57F-EUEqI0^C9^x:quI8n$lB~s_LPQ^0C1-*3r=ons1AS[x$e' );
define( 'NONCE_SALT',       ')J(D1Kf}H##EfiYmFm1S`W]#Z_:4P6B{,b1niE+hT{%0wcO? 7c%B`IBS)Q7R3Wv' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
