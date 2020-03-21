import React from 'react';
import Product, {Navbar2, Macbook, Surface, Swift, XPS, ZenBook} from './Product';
import Footer from './Footer';
import $ from 'jquery';
import Purchase from './Purchase';

class Page extends React.Component {
    render(){
        return(
            <div>
                Hello World!
            </div>
        );
    }
}

class MacbookPage extends React.Component {
    componentDidMount(){
        $(".back").click(function(){
          window.location.href="/";
        })
        $(".purchase").click(function(){
            window.location.href="/Purchase";
        })
        $("#macbook-info").click(function(){
            window.location.href="/Macbook";
          })
          $("#surface-info").click(function(){
            window.location.href="/Surface";
          })
          $("#swift-info").click(function(){
            window.location.href="/Swift";
          })
          $("#xps-info").click(function(){
            window.location.href="/XPS";
          })
          $("#zenbook-info").click(function(){
            window.location.href="/ZenBook";
          })
          $.each($(".ssd"), function(){
            $(this).click(function(){
                $(".ssd").css("background-color", "").css("border", "").css("color", "")
                $(this).css("background-color", "#007AFF1A")
                .css("border", "1.2px solid #007AFF").css("color", "#007AFF")
            })
        })
    }
    render(){
        return(
            <div>
                <Navbar2 />
                <Macbook />
                <Footer />
            </div>
        );
    }
}

class SurfacePage extends React.Component {
    componentDidMount(){
        $(".back").click(function(){
          window.location.href="/";
        })
        $(".purchase").click(function(){
            window.location.href="/Purchase";
        })
        $("#macbook-info").click(function(){
            window.location.href="/Macbook";
          })
          $("#surface-info").click(function(){
            window.location.href="/Surface";
          })
          $("#swift-info").click(function(){
            window.location.href="/Swift";
          })
          $("#xps-info").click(function(){
            window.location.href="/XPS";
          })
          $("#zenbook-info").click(function(){
            window.location.href="/ZenBook";
          })
          $.each($(".ssd"), function(){
            $(this).click(function(){
                $(".ssd").css("background-color", "").css("border", "").css("color", "")
                $(this).css("background-color", "#007AFF1A")
                .css("border", "1.2px solid #007AFF").css("color", "#007AFF")
            })
        })
      }
    render(){
        return(
            <div>
                <Navbar2 />
                <Surface />
                <Footer />
            </div>
        );
    }
}

class SwiftPage extends React.Component {
    componentDidMount(){
        $(".back").click(function(){
          window.location.href="/";
        })
        $(".purchase").click(function(){
            window.location.href="/Purchase";
        })
        $("#macbook-info").click(function(){
            window.location.href="/Macbook";
          })
          $("#surface-info").click(function(){
            window.location.href="/Surface";
          })
          $("#swift-info").click(function(){
            window.location.href="/Swift";
          })
          $("#xps-info").click(function(){
            window.location.href="/XPS";
          })
          $("#zenbook-info").click(function(){
            window.location.href="/ZenBook";
          })
          $.each($(".ssd"), function(){
            $(this).click(function(){
                $(".ssd").css("background-color", "").css("border", "").css("color", "")
                $(this).css("background-color", "#007AFF1A")
                .css("border", "1.2px solid #007AFF").css("color", "#007AFF")
            })
        })
      }
    render(){
        return(
            <div>
                <Navbar2 />
                <Swift />
                <Footer />
            </div>
        );
    }
}

class XPSPage extends React.Component {
    componentDidMount(){
        $(".back").click(function(){
          window.location.href="/";
        })
        $(".purchase").click(function(){
            window.location.href="/Purchase";
        })
        $("#macbook-info").click(function(){
            window.location.href="/Macbook";
          })
          $("#surface-info").click(function(){
            window.location.href="/Surface";
          })
          $("#swift-info").click(function(){
            window.location.href="/Swift";
          })
          $("#xps-info").click(function(){
            window.location.href="/XPS";
          })
          $("#zenbook-info").click(function(){
            window.location.href="/ZenBook";
          })
          $.each($(".ssd"), function(){
            $(this).click(function(){
                $(".ssd").css("background-color", "").css("border", "").css("color", "")
                $(this).css("background-color", "#007AFF1A")
                .css("border", "1.2px solid #007AFF").css("color", "#007AFF")
            })
        })
      }
    render(){
        return(
            <div>
                <Navbar2 />
                <XPS />
                <Footer />
            </div>
        );
    }
}

class ZenBookPage extends React.Component {
    componentDidMount(){
        $(".back").click(function(){
          window.location.href="/";
        })
        $(".purchase").click(function(){
            window.location.href="/Purchase";
        })
        $("#macbook-info").click(function(){
            window.location.href="/Macbook";
          })
          $("#surface-info").click(function(){
            window.location.href="/Surface";
          })
          $("#swift-info").click(function(){
            window.location.href="/Swift";
          })
          $("#xps-info").click(function(){
            window.location.href="/XPS";
          })
          $("#zenbook-info").click(function(){
            window.location.href="/ZenBook";
          })
          $.each($(".ssd"), function(){
            $(this).click(function(){
                $(".ssd").css("background-color", "").css("border", "").css("color", "")
                $(this).css("background-color", "#007AFF1A")
                .css("border", "1.2px solid #007AFF").css("color", "#007AFF")
            })
        })
      }
    render(){
        return(
            <div>
                <Navbar2 />
                <ZenBook />
                <Footer />
            </div>
        );
    }
}

class PurchasePage extends React.Component {
    componentDidMount(){
        $("#browse").click(function(){
          window.location.href="/";
        })
      }
    render(){
        return(
            <div>
                <Navbar2 />
                <Purchase />
            </div>
        );
    }
}

export default Page;
export {MacbookPage, SurfacePage, SwiftPage, XPSPage, ZenBookPage, PurchasePage};