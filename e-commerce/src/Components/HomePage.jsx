import Navbar from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import { Heading } from "@chakra-ui/react";

const slides1 = [
  {
    url: "https://sslimages.shoppersstop.com/sys-master/root/hef/h42/28548699815966/infuse_Top-Banner-Web45fgbnnn.jpg",
    alt: "two",
  },
  {
    url: "https://sslimages.shoppersstop.com/sys-master/root/h41/hc8/28554693115934/suits-and-jackets_Top-Banner-Web--main-600-we-202201030.jpg",
    alt: "three",
  },
  {
    url: "https://sslimages.shoppersstop.com/sys-master/root/h0b/hf7/28554697834526/womenswear_Top-Banner-Webui.jpg",
    alt: "six",
  },
  {
    url: "https://sslimages.shoppersstop.com/sys-master/root/h84/h9f/28537504563230/Fragrances_Top-Banner-Webkekw.jpg",
    alt: "eight",
  },
  {
    url: "https://sslimages.shoppersstop.com/sys-master/root/hf6/h91/28537504170014/watches_Top-Banner-Webjiie.jpg",
    alt: "nine",
  },
];

const bigdeals = [
  {
    url: "https://images-static.nykaa.com/uploads/5946ec39-e20d-48bc-872d-81a5c3dccb57.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/da4601ff-b445-4d28-a2fb-109892c6b6d9.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/8da35093-a389-4cc5-b3c7-f6bb0e8707e7.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/767e252c-522b-40c8-9103-1f1a3122dce8.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/c06914a1-bb9b-425a-91da-3c098261afaa.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/8a64d6d4-77ab-478c-acf6-2648af9569c9.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/67147a77-edc4-4f43-b8ad-f6c10ea88ae2.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/8815975c-4e9d-48d8-82ba-3a2f67ecc336.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/15e7a473-8929-455d-a5af-e9fa143da7bf.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/e8c8ff1f-6027-4025-b3b8-fb9a3935aee4.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/d098fcdd-989e-4068-a76a-3a9a78e4108c.jpg?tr=w-250,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/6c6b5b78-34be-4b0d-8c1b-c4c0aaae9a17.jpg?tr=w-250,cm-pad_resize",
  },
];

function HomePage() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      {/* Navbar Completed */}
      <Navbar />

      {/* First Part */}
      <div className="product-types">
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
        >
          <img
            src="https://images-static.nykaa.com/uploads/5f26d429-baaf-4282-8ed9-5dc2fd7faf70.jpg?tr=w-200,cm-pad_resize"
            alt=""
          />
          <h1>Indianwear</h1>
        </div>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
        >
          <img
            src="https://images-static.nykaa.com/uploads/aa3ad470-37de-4ab9-9b0d-7665c8134a41.jpg?tr=w-200,cm-pad_resize"
            alt=""
          />
          <h1>Weasterwear</h1>
        </div>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
        >
          <img
            src="https://images-static.nykaa.com/uploads/85916e74-3222-41b4-8800-98cf5350bad7.jpg?tr=w-200,cm-pad_resize"
            alt=""
          />
          <h1>Meanswear</h1>
        </div>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
        >
          <img
            src="https://images-static.nykaa.com/uploads/1078f826-34b1-4c3d-a518-f3af962eb556.jpg?tr=w-200,cm-pad_resize"
            alt=""
          />
          <h1>Sandals</h1>
        </div>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
        >
          <img
            src="https://images-static.nykaa.com/uploads/2bf4b868-80cb-4ab4-b548-a2d2c3ab3fc7.jpg?tr=w-200,cm-pad_resize"
            alt=""
          />
          <h1>Sneakers</h1>
        </div>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
        >
          <img
            src="https://images-static.nykaa.com/uploads/788effc6-ec38-4930-a14f-0cb58f62e454.jpg?tr=w-200,cm-pad_resize"
            alt=""
          />
          <h1>Watches</h1>
        </div>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
        >
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h94/he8/27108368187422/karrot-navigation-banner.jpg"
            alt=""
          />
          <h1>Kidswear</h1>
        </div>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
        >
          <img
            src="https://images-static.nykaa.com/uploads/741acd39-3277-4c6d-9fe6-6d087b9602f9.jpg?tr=w-200,cm-pad_resize"
            alt=""
          />
          <h1>Denims</h1>
        </div>
      </div>

      {/* Slider Second Part Completed */}
      <div style={{ marginTop: "48px" }}>
        <Slider {...settings}>
          {slides1.map((item) => (
            <img className="slide1" src={item.url} alt={item.alt} />
          ))}
        </Slider>
      </div>

      <div style={{ marginTop: "60px",border:"1px solid #333" }}>
        <img
          style={{ width: "100%" }}
          src="https://images-static.nykaa.com/uploads/70eac683-7676-4d16-b305-625b4d9c4f20.gif?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>

      {/* Most Loved Items */}
      <div className="bigdeal">
        <Heading textAlign={"center"} mb={10}>
          What's New Deals
        </Heading>
        <div className="bigdeal-offers">
          {bigdeals.map((items) => {
            return (
              <div>
                <img src={items.url} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Delivery Image */}
      <div style={{ marginTop: "60px" }}>
        <img
          src="https://sslimages.shoppersstop.com/sys-master/root/hb5/h60/27269490540574/web_hp_icon-strips_main_20220322.jpg"
          alt=""
        />
      </div>

      {/* Advantages of Website */}
      <div className="adv">
        <div className="adv-first">
          <img
            style={{ width: "80px", height: "70px" }}
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/secure-payment-2650865-2211974.png"
            alt=""
          />
          <div style={{ marginTop: "2px" }}>
            <h1>
              <b>100% Secure Payments</b>
            </h1>
            <p>Moving your card details to a much more secured place</p>
          </div>
        </div>
        <div className="adv-second">
          <img
            style={{ width: "80px", height: "65px" }}
            src="https://cdn-icons-png.flaticon.com/512/102/102649.png"
            alt=""
          />
          <div style={{ marginTop: "3px" }}>
            <h1>
              <b>Trust Pay</b>
            </h1>
            <p>100% Payment Protection. Easy Return Policy</p>
          </div>
        </div>
        <div className="adv-third">
          <img
            style={{ width: "80px", height: "70px" }}
            src="https://static.thenounproject.com/png/2502966-200.png"
            alt=""
          />
          <div style={{ marginTop: "2px" }}>
            <h1>
              <b>Help Center</b>
            </h1>
            <p>
              Got a question? Look no further. Browse our FAQs or submit your
              query here
            </p>
          </div>
        </div>
        <div className="adv-fourth">
          <img
            style={{ width: "80px", height: "70px" }}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaGhgaHRoYGRwYGRofGhgaGhoaGhocIS4lHCErHxwaJkYmKy8xNTY1GiQ7QDs0Py40NTEBDAwMDw8PGA8PGDEdGB00ND80PzQ0ND8xPzExND8xPzE/MTQxMTE0MT80MTE0MTQxMTE0MTExNDE/NDQxMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQcIAgUGAwT/xABKEAAAAwQHBAUIBwcDBAMAAAAAARECITFRAxIyQUJh8AQicbFSYoKhwQUGBxOBkcLRFBUXI5OisxYzNFOy0uFUcpIkQ3PyRGOD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AMt1jtJvQq+IqXXG8zlkIpquK4stKDoYbzkekAX4YdYPij1RD7ys56cHjay08BUuuJ5HPISsdpN43VZZg72XHMwU1XFeWWkARCsruxreApN4rydVnn3ghImGeYqnHFcWWlARLltPM5ZCr+WHW0neCFC47RyMSWVnPTgFW/pOPqgmFXE9Z5d4cztZEIhQwlA5npQFrnaR8KviFXCrjfW8O4FOKb0shEKGG889IAVsXRck8xfi/KIpxvKyUyF8bWWngGXR/MFfFNySzDkVnMRTjecSkUwCrhVxPXwCudpHwq+IiFBd248xyU4pvSyAEwrF6yyAm7+i5J5ghQwnE5HpBCOB3lZKZAKpztfl0oKcFsv/ANwnxWur8rxUuuKzmAtbFNySz7hEOyua+AinHEbjKRT5BVKyu7Fc5KAtfFJyTz7wfBbT1kJWO0m9AiynzFQoXHE5GAepPp694CeqY6XeQCghqmK48tKDo4bymekCqdlX9KWWpgt6Qu6WYgeNnLTg8LWenh4/k+X+A8PzCg6OG4pHpQQ1TFeeWkBb0jh6OYVTsrnWnlqQgKSLhlmKS9q7hymJWxI6FWeYIcLzfWllqYoruzi4iSXs5adEFvRxRLpZg/8A5Q6uvAQOeLMtSB3Zw8dKLVOEon0shHxRxuJmWepiiofbnlyEddYvLPnIWq1C/peAPjVd0Z5w0gA/tYeAab174BVOF5wPo5AhyhHrCCcsPHSRFf2sXDSAhyjDqhVOF5ROeQCO7F3HnMV/bu4cpjj1k3ej4iodld6NbwAV3ZxcdIBd+HgIt6OKJTzEe4rzgcikA5ab174CcsPHUwn1bXW08Fgdx2SkAP7V/DlIHdjx5ghqmInmcylyErElZN2WcwHJ99u7hymDuzi4ghqmI4HIpcxFiaOK0UzANzPvAcfWs9EBRyQoLu3nnpAU43lZKZCu7F/HnIH9rDwEDxtZaeHIrOYab174CcsPHUxRVOOI4lItIIhQXdnmK/tYuGkEd2LuPMQFOKb1xZaUQiJEwm8zkcuQ5P7d3DlMcGmmSZMzNGCJTOSPPOQo8755ed1HsDBG0VemaX1dGRopE6u2eFgp3m4r0wv5X87ds2lozpKdtkjNfV0bR0bBZVWT3i/3GZ5j8vnD5Xa2vaKTaGjPfa3CPCwTmGckZT2mZ3j8ux7BS0ptFRUVJSGyRG0VGw03VI1Q2qpGhOOMhFfP17fTb/5H8w9e302/+R/Mfu/Z/a/9LtP4FJ/aH7PbX/pNp/ApP7QVfI/k/adpb9VQE223VNoyr1SJkkIzM2miInmRe0d7+wPlT+U0v/mYX+sdVsHk7yhQt+soqDamG0NmsxQ0hGhxIzqvJxOyIdr9YeW1/wDnr/4qRf6ARP2B8qfyj/HYT274855QoaagpG6KlrsNsGjTJtqikRk8jMjIyMjUrjHo/rDy2h/x6X/dN/2Dp9p8j7dSNm23s21NttmptNUNKbTR8TZe5C4EQDrPXt9Jr/kfzD17fSa/5H8x+79n9r/0m0/gUn9ofs/tf+l2n8Ck/tBX5KPa6Rk1ZpG2TmzSNMn7yNR67za9I21bOZMU7TW0UJmSk0f3rJOey2drg0qzIec/Z/a/9JtP4FJ/aOtIwRs/5O8oMU9ExT0TRNMtErJliKBqUSMjUjK4yMh+lLuk8z6IxB6HPLLTNM3spmrLbJ0lGRm5ltlCaIv9zD+wcxl8u7FkYIfDZ62kL3gt97TjKQSys56cLzO1kQCJhVxPI55d/cFY7Sb0KviCFDDceelBTjilkAiFZVxvNqWXd3jkt97LiKYiEiYbzz0gr/aVnMgD17XR5gLWbkWvaADipWsJOMpnPkKl15wORCG1iR5OqzzFS643mcsgE+G11tPDk1Z6ovww6wZ9KPVARDhiJ5nMpCKVpN2FXOY5VcNxPI55BWxI+FXxAKp2V3okeUh1HnTSGWw7W0yaVdmp+KlRNofvT3DtquFXG+tLIdP53P2Dazgmy7QST+5bf39wDW4ZN9CZfe7UdxMUK5lWpBjMZL9CZfe7UcmKE0nvUjgVl5b7js5GCHDEUTmWkEW/pOTo5gmFYPrTy7+4ESsUU3ZZjkhwXeOByLShWxJlV8REwrF9aWXd3gKt9xWimYnjZy04Fv6Lk6WYvxfl0vcAcytZgpRwnApHpREu6N/SBcSRdVlmAjZGhku+hvyGqtDZZ4FyG1TbLjZW4zreyA1VobLPAuQLHp/R2Z/Wey1TQ61IXvoaRe4bCF3FazMa9ejxlfKWykqb7f6NINhCncy4y6WYJV8bOWnC8ytZkHxQ6ul7hEu6MT6WQApRw3FnpQQ4Yp5AuJHG6rLPu7xamFXxreAoilHDeWekFf7Ts5EONbEjidVnn39wqXXtQPo5CC1W569wB6k+nr3gAhmariuLLSghQuOJyMU1VMVx5aUR3ZxZmAeFnPTheZ2shNM5acHPFmQAhQwlA5npQU44pZA7s4Sz0oIapinkAIUMN556QdP53v2HazNzX0XaCIsvUtv5juFKOG8s9IOn87/4Da1tfRdoTh6lv/IDW8ZL9ChffbUd5MUKZnWpBjQZL9Caeu2qdShTjWpAVl7O87WRAhQwlA5npQ54uGpA7sXcecxUFOKb0shEKGG85HLkK/t+HIHdi/jzkIC33lZKZCfFa6univ7WHgGm9e+AAnuKzmIpxxG4ykU+QcsPHUwf2r+GkAcW2SqmS7qGa5pAarUNlngXIbU0iVT6CH70941WobLPAuQLHpvR6RH5S2VYV2/0aQbCyO8oFMa9ej1PrLZVhXb/AEaQbCldPDwBKfFa6vyicZCpdczA5iaay0+ArvZh4iiVjtJvG4ykU+XvEqlZXdjWzksByf2r+GkEQuxPPmICnaTeJxFMp95+4VLrjichH9q4stKK72YuIonqWel3kAVWJn3iAKZHZV54pZLqILejiiXSzBCs4TicjlyFW+8rJTIQTxh1fl/gEulE+llmHxWurp4qXXFZzMURb0ccGZZ6mCHZV/S8FBTjiNxlIp8hKpWV3YrnIQVcSOhVnmmoDpvO92w7WRvM9l2gyORepbdz947lTtJvE4imU+Y6fztdsG2ETyPZdoMzkfqWncgGt4yX6FP321EjzYoUOW9SPGNBkz0KH97tRXHR0JGct6keCsuIcLyifSEuVN03EzI58/eOSXXE8jmJWO0m8bjKRT5AhVNUXe6WUhFvTdJxszOepBVJKq7sa2cpC1jtJvE4imU+YAhuK84HIJ5Wutp4GV1zUT6IfDZ62shRCmjjgUhUNUxE8zmUgI772olISqVnCTyOZyARs902k3UPdzSI1WobLPAuQ2qbaNDaTeQyq5TmNVaGyzwLkIsem9Hpp5S2VSXfb/RpBsK90zs5DXv0eGnlLZTIl32/0aQbCZdKPVBKTytdbTwW+47JSMX4YdbSd4Lfe04ylmAIapivOZS5DipIqbss5iphVxPrTy7+4WviR8KviAIapiOByKXMRYyK0UzBMKuN9aWXd3gt/RgXSAcfWMdEUcvXn0efyFFEddYv485A/wBuHgIpWsJRKZz5Cpdedk5EIGm9e+AnLDx1MPhtdbTxVvuOyUgB/bv4cpCO7HjzBDhiJ5nMpchKxWk3YJnMByf27uHKY6fzu/gNsSz9F2hePqW/8Dt0Oyu8byORS5jp/O7+A2wyh9F2gjKZ+pbfyAa3jJnoTX1u1SqUK8K1IMZjJnoTI/W7VKpQrmVakBWXXdnDxB/av4aQFvuOyUjEQ4YrzmWkBBC7E8+Yr+1dw0oikipuyzFQ4YrjkWlAOWLIxPCznpwvIrWZieNnLTgF54siEd2bjz0ovMrWZApRw3FnpQHFszQzxIbskGqtDZZ4FyG1TZGhliQ35INVaGyzwLkCx6f0eL9Z7Kka7f6NINhC7jtZGNe/R4R/WeypGu3+jSDYMu7FmYJVllZz04HxvOJSINM5acD+1izIAQoYbjz0oKccUsgd2biz0oqH2p5ACFDDecj0gcys5kI7s3lnpBeeHIgF9Y30S17QCq3Pl8gAcTPEjydVnnqQJd0on0chVNVO1cWWlDkdrIwBPyw62vETNLUS6OYSys56cLzO1kQCVSs3E+tPLUha2JHwq+IISJhuPPSiKarilkAlUrNxvrSy7u8dR53EuwbWcE2XaCSf3Lb9SHcIUMN556QdP53P2DazOJbLtBEUy9S0/mA1vGS/Qmz97tRyYoTSe9SOGNBkv0JkXrtqmTFCmZ1qQFZdzSLk6OYVcKwfWnlqQq33naKRAhQwlA85cwRK2JMqviFXDN9aWWpi1jim9LIEKGE4nI9IAmaWbulmKn5vy68AW+8rOYnxWur8rwCrd0Xr0sgXEkXVZZ6mKl1xWTmYinHEbjKRT5AOLbLjZW4zreyA1WobLPAuQ2pbZKqZLuoZrmkBqtQ2WeBcgWPTejxlfKWykqb7f6NINhS/pj1hr16PSI/KWyrCu3+jSDYX4bPWBKS60OrrwCrdeTzPpZB8Vrq6eKl1xPI5gOKlFHG6rLMcqmFXxreAlY4pvG4ykUxEKyu7GtnIAUrSOJxlPMVLulA+iCnG8nEUymBldc1E5AL6k+nr3gJ6ljpd5AAqGqHauPLShyxZmBkcFeeKWWpiLekIl0swDxs5acK/24syE8YdXXgCHCUT6WQCujhuLPSiIcMU8gW9HG6rLPUwQ7KvjW8AFdHDeWekHTed/wDAbWsfou0Jw9S3/kdwt6OJ1WeepDp/O/8AgdrI3mey7QZHIvUtuAa3jJfoTT121TqUKca1IMaDJfoUP77anPNihQ5b1I8FZef2sXAHdi7jzmIhql5ROeQlZ1ZHQJmRzBHJ/b8OQjuzfx0gVTsrvRreALejicbM8xQ54eAum9e+A4vdM7J9EWfVtdYQV3Zw8Qf27+HKQi3o44FIENat8TOZSAcW0qn0UP3p7xqtQ2WeBchtS21um0m6hlVzSI1WobLPAuQLHpvR6n1lsqwrt/o0g2F54dfMa9ej008pbKpLvt/o0g2Fe6Z2cgSmmstPgK7s4eIk8rWeniK5UccCkYDk/t38OUhHdjx5ioapivPKXIRSRU3ZZzAH9q7hpQ5YuIPhiOByKXMFjIrWYAjEz7xBPWMdEUUUyKBHunE5HpBeZWcwNLrF/HnITnh4amIHja6unioULisnMw03r3wB3Zw8QBTim8bjKRT5DjVKyu7POQ5P7d/DlIR3Y8eYApxxFAplPmOn87XbBthE8j2XaDM5H6lpw7h/au4cpjp/O7+A2xIfRtoXj6lvxQBreMmehQ/vdqK42KEjyKtSPGMxkz0Jr63apVKFeFak/wAgrLqFC4nkczkJWO0m9A2cpiu7OHiD+3fw5SBHFCsruxrZyFU44icRTKYO7HjzFf2sPDSgIl3StZB8NnrByxZGGmc9OAVb7zcZSzEQoXE8jmchX9rFwEd2bjz0oDjSNGhtJvIZVckiNVqGyzwLkNqm1Q+khuyQaq0NlngXIFj03o8NPKWyp02/0aQbDF/VHqjXn0eL9ZbKka7f6NINhS52stPBKvww6wLivNxlLMSUis5gpxxHEpFpACrhV0a3gLWO0j4VfERChhuPMFNVxSyAWrhuN5nLIRb+jDrAhQwnE5HpBeZWcwF9e10efyAK9J0S17QAcTMopulEpnpBcrzs5CG1iSDqs8wS7pX9EA+G11vneKt9x2SkYfDDraTvEW9LTk6OYoVTsrvE8zmUuQVitJuwTOaAmFXE+tPLv7ha2JHwq+IgiHDEbyORS5jp/O3+A2xIFsu0EeZ+pbeO4TCsX1pZd3eOn87n7BtZwTZdoJJ/ctvAa3jJnoTI/W7VKpQrmVakGMx2vkDzh2jY2m2tnaZZNsmSarMk2pMmZk4+JgrZNSjccCkYIcMV55aQYH+0ryh/MY/CY+QfaT5Q/mMfhsLyAxnhSim7LMVDhiOByLSjA32leUP5jH4TCch+jYPPzyrTNlRUTRNttQZZomDadE1wkUzQiBMZx5FazE8bOWnDF227b5wUbBttMMNMskrRMMUTbREjzNhk1a9ijzBekryh/NYf/wDUx3OAZ4Q4XlE5kClHDcWelGB/tJ8ofzGPwmO9wfaV5Q/mMfhMJ7kAxnekI0MsSG/JBqrQ2WeBch7I/ST5QRPWMfhsL70HkGWUJJAr0fo8I/rPZUjXb/RpBsKXK1np4169HhL5S2Uob7f6NINhS/pj1gSnLDlpwr+1i4aQPih1Qq4byeZzyARSjhuLMEOGK48gUrSOhV8QqmtVd6NbwAV3ZxcdIJzw5AuJHE4ynmKn5odUBarc+XyAT1DXSPvAAMzVTtFAplpQ5HayB6vtXcNKJyxcQDws56cCnG87RSIXTGvdEH9rFwARCRMNx56UVTim9LIHdi7jzmD+34cgBChhOJyPSD8nlPYypqGkozx0dJRkUybZNlfcY/U7s38dIBL2sPABqw0w0yZstEjTJmy0RxJojRoj4GRkIMk+lDzQaYba22gI2mGn07JE9hrE2nQaiaQNTgbsbArI3ml6OKLatlY2hraGyabNrdoyYMmCZbNlGjaIzNpy3IqXKfd/ZDsy/wATTpNKP+wYkoNrpGCMmKRtgjeZMNtMEZzMmTJR9PrKn/n034rf9wDufPfzbZ2CnYo2aQ6Qm2Cb3kJtneaZRoicho43XyU/eehjY6P6PT0qFXbpahtXsssMMNMsrcrTZnm6RDEVJSNNGbTTTTTRxaaM2mjueZvMei8zPOxvYG2kZ9ZRN1a7C1T3YNsHc0S+1xHAjINhDneUOsNf/SRsbFF5QpmWEImqjZsk4mW22CabJMz3u2Pb7Z6XKCqfqtnpmmyLdKkqMMF/uNltoz93uGKfKG2t09K3TUjVZtto2mjRHncRXERIRFIiAj13mF5kMbdR0lJSUzbBMUnqyZoyZrGdVlpWjaI3HWIiJMJvHqfsioE/idoWSUf9gxHQ07bBmbDbbBmimw00wZpBTZMlH2+sqf8An034rf8AcA9V5/8AmYxsDNE3R0zVIzSNNMo2TNYjIlUjZIiMroOMymPFj6U1O22attttmTiNto2jIpEbRhs9A020ywwy0222dVlhklaaM7iIB6z0WbAdJ5Qo2n1aJmkpGjuJWDYZJbntr2TGePhs9YeV8wPNb6DQHXQ6WkMmqYyeRJYoyO8mVN95tNXIPVaZz04EPitdUVLrieRzyELvO1kDuzhPPSgFY7Sb0KuUwQrK7sVzkCnHFeWQIUMN556QBVxXk4inmIn5rXVB/auzLShyO1lp4B6hnpchBarEz7xBRyaI1S84NSy1MRe6PWA2SeS7pxORh8NnrfMQPGHV14AhwvKJ9LIPitdX5XioULieRzOQCVnVkdCrLPUwqnZV/S8AU7Sb0DLKae4SqVld2NbOSgKt6OKLM89SAlcV5wORSBTjiJxFMp8wInJcbzORyFCboWusPHeWPRzsNO0bRMNULTRxoGiZJVvYaZNkvYRD2Pw2esC39K11RBjj7IdnVPpNOpPP92ns3BPsj2ZK30naE/8AzX+gZITCrieRzOQVjtJvQq5TAY4+yHZ1q/SadY/9tP6BPsj2ZDP6TtCFH92vs3BkdCsruxrZyHJb7ycRTzAY3+yLZ3f9TTvh+779wPsi2d//AFO0Oj+77twZI+KPVD4YdYBjb7I9mRfpO0Ibi/dr7dwX7IdnWr9Jp1j/ANtP6BkhcV5uMpZiIVlXRreADHNH6JdmtHtG0GyVy0ZGftqQHrPIPmtsuxuoKJlltov3jRm3SJeVdp5E6BIWQ7usdpHwq+IiYVcbzOWQBORWswWGdnIVfyw6wfFHqgI98ytZiK5U3TgUj0oqXdG/pC1sSRckswEQ1TFPISsSKm7eWYtXCro1vAK2JHk6rPMUHuK84HIgWMitZiphm9ZZB8MOsIOFdjo694Dn64+hr3AKIaPSzi46QOeHXuiKZk8yslEpnpA8bOQBpvXvgDuzh46UPC1np4ilG44FIwFf27+HKQjux48wQ4LvXnlpArEipuyzEFf2sPDSiFDLFkYqHDEcDkWlEKGRWszAPCznpwc8WQeNnLTheZWswEd2cJ56UFOOKWQKUcJwKR6UEOGKeQAhQw3nnpAf2sOZApRw3lnpAQ4XnZORAHjay08ORWc9ODwtZ6eHI7OWnAD+1eUi0gIUMNx56UHwxXnMtIClHDcWelAFOOKWQIUMN5yPSAhwxTyBSjhvKZ6QAPvKznpwFfnay08D7zs5acBf+2engLyKzmCnHEcSkWkE5YeIP7V/DSACEiLuzzBTVcVxZaUHdjx5iv7d3DlMBEKGE7RyMPCznpwruzi4iaZ17gHL1jfRLXtATfmXcKA5lA+IvRAADpDicC4gADmVr2DgVn2gADliLgPmVlriAAKeDUgKLQAAh2WePzHMrR8AAB8ysnx+Q54meHgAAODMG9TA8HEAAcitNcPAh82rBcfmAAPqdsuA+ZWGuPyABRzOLHD5Dizj1MAEEODHEc2bbXD5AAD5HYLiPs1bLh8xAAfIrLXHxIc2osakACj9QAAg/9k="
            alt=""
          />
          <div style={{ marginTop: "2px" }}>
            <h1>
              <b>Shop on the Go</b>
            </h1>
            <p>Download the app and get exciting app offers.</p>
          </div>
        </div>
      </div>

      {/* Footer Page */}
      <div className="footer">
        <Heading textAlign={"center"}>Join Our Newsletter</Heading>
        <div className="footer-mark">
          <div className="mark">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
              alt=""
            />
            <p>Instagram</p>
          </div>
          <div className="mark">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
              alt=""
            />
            <p>Facebook</p>
          </div>
          <div className="mark">
            <img
              src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
              alt=""
            />
            <p>Twitter</p>
          </div>
          <div className="mark">
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/pinterest-512.png"
              alt=""
            />
            <p>Pininterest</p>
          </div>
          <div className="mark">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt=""
            />
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
