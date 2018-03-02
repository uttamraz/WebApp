using System.Web;
using System.Web.Optimization;

namespace WebApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Script/Bundles")
                .Include(
                "~/client/dist/inline.bundle.js",
                "~/client/dist/polyfills.bundle.js",
                "~/client/dist/scripts.bundle.js",
                "~/client/dist/vendor.bundle.js",
                "~/client/dist/main.bundle.js",
                "~/client/node_modules/jquery/dist/jquery.min.js",
                "~/client/node_modules/popper.js/dist/umd/popper.min.js",
                "~/client/node_modules/bootstrap/dist/js/bootstrap.min.js"
                ));
           
        }
    }
}
