module.exports = emailTemplate = (body, articleLink, email) => {
    return `
<!-- THIS EMAIL WAS BUILT AND TESTED WITH LITMUS http://litmus.com -->
<!-- IT WAS RELEASED UNDER THE MIT LICENSE https://opensource.org/licenses/MIT -->
<!-- QUESTIONS? TWEET US @LITMUSAPP -->
<!doctype html>
<html>
<head>
<title></title>
<style type="text/css">
/* CLIENT-SPECIFIC STYLES */
body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
img { -ms-interpolation-mode: bicubic; }

/* RESET STYLES */
img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
table { border-collapse: collapse !important; }
body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

/* iOS BLUE LINKS */
a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

/* MOBILE STYLES */
@media screen and (max-width: 600px) {
  .img-max {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
  }

  .max-width {
    max-width: 100% !important;
  }

  .mobile-wrapper {
    width: 85% !important;
    max-width: 85% !important;
  }

  .mobile-padding {
    padding-left: 5% !important;
    padding-right: 5% !important;
  }
}

/* ANDROID CENTER FIX */
div[style*="margin: 16px 0;"] { margin: 0 !important; }
</style>
</head>
<body style="margin: 0 !important; padding: 0; !important background-color: #ffffff;" bgcolor="#ffffff">

<!-- HIDDEN PREHEADER TEXT -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td align="center" valign="top" width="100%" background="https://litmus-builder.s3.amazonaws.com/9fe7f9ec-48de-464f-a49f-b36c3cea0f9e" bgcolor="#3b4a69" style="background: #3b4a69 url('bg.jpg'); background-size: cover; padding: 35px 15px 0 15px;" class="mobile-padding">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                <tr>
                    <td align="center" valign="top" style="padding: 0 0 50px 0;">
                        <img src="https://litmus-builder.s3.amazonaws.com/ecf1a9b3-80b4-4434-8d28-d0c4ff439b76" width="50" height="50" border="0" style="display: block;">
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#ffffff" style="border-radius: 3px 3px 0 0;">
                        <img src="https://litmus-builder.s3.amazonaws.com/e51b4dcc-cb85-446a-80fc-950f44319780" width="600" height="200" alt="insert alt text here" style="display: block; border-radius: 3px 3px 0 0; font-family: sans-serif; font-size: 16px; color: #999999;" class="img-max"/>
                    </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <tr>
        <td align="center" height="100%" valign="top" width="100%" bgcolor="#f6f6f6" style="padding: 0 15px 50px 15px;" class="mobile-padding">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                <tr>
                    <td align="center" valign="top" style="padding: 0 0 25px 0; font-family: Open Sans, Helvetica, Arial, sans-serif;">
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td align="center" bgcolor="#ffffff" style="border-radius: 0 0 3px 3px; padding: 25px;">
                                    <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                            <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif;">
                                                <h2 style="font-size: 28px; color: #444444; margin: 0; padding-bottom: 10px;">Blog article out!</h2>
                                                <p style="color: #999999; font-size: 16px; line-height: 24px; margin: 0;">
                                                  ${body}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding: 30px 0 0 0;">
                                                <table border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td align="center" style="border-radius: 26px;" bgcolor="#75b6c9">
                                                            <a href=${articleLink} target="_blank" style="font-size: 16px; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 26px; background-color: #75b6c9; padding: 14px 26px; border: 1px solid #75b6c9; display: block;">Read more &rarr;</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                      </table>
                    </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <tr>
        <td align="center" height="100%" valign="top" width="100%" bgcolor="#f6f6f6" style="padding: 0 15px 40px 15px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                <tr>
                    <td align="center" valign="top" style="padding: 0 0 5px 0;">
                        <img src="https://litmus-builder.s3.amazonaws.com/ecf1a9b3-80b4-4434-8d28-d0c4ff439b76" width="35" height="35" border="0" style="display: block;">
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="padding: 0; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #999999;">
                        <p style="font-size: 14px; line-height: 20px;">
                          Mano Sriram<br>
                          India, 530009

                          <br><br>
                          <a href="blog.manosriram.com/unsubscribe/${email}" style="color: #999999;" target="_blank">Unsubscribe</a>
                        </p>
                    </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
</table>
    <!-- LITMUS ATTRIBUTION -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td bgcolor="#ffffff" align="center">
                <!--[if (gte mso 9)|(IE)]>
<table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
<tr>
<td align="center" valign="top" width="600">
<![endif]-->
                <!--[if (gte mso 9)|(IE)]>
</td>
</tr>
</table>
<![endif]-->
            </td>
        </tr>
    </table>
    <!-- END LITMUS ATTRIBUTION -->
</body>
</html>
`;
};