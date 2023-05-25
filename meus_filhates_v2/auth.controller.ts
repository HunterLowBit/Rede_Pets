import { Controller, Get, Res, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";

@Controller("auth")
export class AuthController {
  @Get("google")
  @UseGuards(AuthGuard("google"))
  googleLogin() {}

  @Get("google/callback")
  @UseGuards(AuthGuard("google"))
  googleCallback(@Req() req: Request, @Res() res: Response) {
    const user = req.user;
    // Aqui você pode fazer o que quiser com o usuário autenticado
    res.send(user);
  }
}
