import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Products from "@/pages/Products";
import Company from "@/pages/Company";
import IndustriesPage from "@/pages/IndustriesPage";
import Pricing from "@/pages/Pricing";
import ComingSoon from "@/pages/ComingSoon";
import NotFound from "@/pages/not-found";
import CredentialManagement from "@/pages/solutions/CredentialManagement";
import VisitorManagement from "@/pages/solutions/VisitorManagement";
import ContractorAccess from "@/pages/solutions/ContractorAccess";
import PhysicalSecurityIntegration from "@/pages/solutions/PhysicalSecurityIntegration";
import Careers from "@/pages/company/Careers";
import Press from "@/pages/company/Press";
import Contact from "@/pages/company/Contact";
import PrivacyPolicy from "@/pages/company/PrivacyPolicy";
import Imprint from "@/pages/company/Imprint";
import CookiePolicy from "@/pages/company/CookiePolicy";
import RtsSpectrumEvent from "./pages/company/press/RtsSpectrumEvent";


function AppRouter() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/products" component={Products} />
            <Route path="/company" component={Company} />
            <Route path="/industries" component={IndustriesPage} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/coming-soon" component={ComingSoon} />
            {/* Solution Pages */}
            <Route path="/solutions/credential-management" component={CredentialManagement} />
            <Route path="/solutions/visitor-management" component={VisitorManagement} />
            <Route path="/solutions/contractor-access" component={ContractorAccess} />
            <Route path="/solutions/physical-security-integration" component={PhysicalSecurityIntegration} />

            {/* Company Pages */}
            <Route path="/company/careers" component={Careers} />
            <Route path="/company/press" component={Press} />
            <Route path="/company/press" component={Press} />
            <Route path="/company/press/rts-spectrum-event-2025" component={RtsSpectrumEvent} />
            <Route path="/company/contact" component={Contact} />

            {/* Legal & Security */}
            <Route path="/company/imprint" component={Imprint} />
            <Route path="/company/privacy-policy" component={PrivacyPolicy} />
            <Route path="/company/cookie-policy" component={CookiePolicy} />
            <Route component={NotFound} />
        </Switch>
    );
}

function App() {
    const base = (import.meta.env.BASE_URL ?? "/").replace(/\/+$/, "");
    const routerBase = base === "" ? undefined : base;

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Router base={routerBase}>
                    <AppRouter />
                </Router>
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;
