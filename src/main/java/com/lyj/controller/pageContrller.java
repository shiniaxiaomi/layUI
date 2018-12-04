package com.lyj.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 陆英杰
 * 2018/12/4 18:03
 */

@Controller
public class pageContrller {

    @RequestMapping("/")
    public String index(){
        return "index";
    }

}
